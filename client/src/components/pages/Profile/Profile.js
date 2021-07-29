import { Component } from 'react'
import UserService from '../../../services/user.service'
import { Form, Button } from 'react-bootstrap'
import './Formulario.css'
import MapUser from './../MapsPages/MapUser'

class Profile extends Component {
    constructor() {
        super()
        this.state = { name: '', surname: '', email: '', position: null }
        this.userService = new UserService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        const userId = this.props.match.params.id
        this.userService
            .editUser(userId, this.state)
    }

    componentDidMount = () => {
        this.userService
            .getById(this.props.match.params.id)
            .then(response =>
                this.setState({
                    name: response.data.name,
                    surname: response.data.surname,
                    email: response.data.email
                })).catch(err => console.log(err))
    }


    handleMarkerPosition = position => {
        this.setState({
            ...this.state,
            position: position
        })

    }

    render() {
        return (
            <>
                <h1>Editar tu perfil<hr></hr> </h1>
                <MapUser handleMarkerPosition={this.handleMarkerPosition} />
                <div className="Formulario">
                    <Form onSubmit={this.handleFormSubmit}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Nombre </Form.Label>
                            <Form.Control type="text" value={this.state.name} onChange={this.handleInputChange} name="name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="surname">
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control type="text" value={this.state.surname} onChange={this.handleInputChange} name="surname" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={this.state.email} onChange={this.handleInputChange} name="email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Impresora 3D" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="grabado láser" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Corte láser" />
                        </Form.Group>

                        <Button variant="dark" type="submit" className="boton"> Editar </Button>
                    </Form>
                </div>
            </>
        )
    }
}

export default Profile