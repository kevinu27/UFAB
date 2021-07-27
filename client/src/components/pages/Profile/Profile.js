
import { Component } from 'react'
import UserService from '../../../services/user.service'
import { Form, Button } from 'react-bootstrap'

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
        console.log(this.state)
        const userId = this.props.match.params.id
        this.userService
            .editUser(userId, this.state)
        // .then(response => this.props.history.push('/user/login'))
        // .catch(err => console.log(err))
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


        console.log(this.state.name)

    }


    handleMarkerPosition = position => {
        console.log("handleMarkerPosition", position)   ///////////////////////////////////////////////////aqui hacer el setState 
        this.setState({
            ...this.state,
            position: position
        })

    }

    render() {
        console.log("state", this.state)
        return (

            <>

                <h1>helloworld
                    <hr></hr>
                </h1>

                <MapUser handleMarkerPosition={this.handleMarkerPosition} />

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
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="dark" type="submit"> Registrarme </Button>
                </Form>
            </>


        )
    }
}





export default Profile