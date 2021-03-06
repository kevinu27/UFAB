import { Component } from 'react'
import { Form, Row, Col, Button, Container } from 'react-bootstrap'
import UserService from '../../../services/user.service'
import './botonet.css'

class Signup extends Component {
    constructor() {
        super()
        this.state = { name: '', surname: '', pwd: '', email: '', description: '' }
        this.userService = new UserService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })

    }

    handleFormSubmit = e => {
        e.preventDefault()
        const { name, surname, pwd, email, description } = this.state
        this.userService
            .signup(name, surname, pwd, email, description)
            .then(() => this.props.history.push('/user/login'))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <h1>Registro de usuario</h1>
                            <hr></hr>

                            <Form onSubmit={this.handleFormSubmit}>
                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>Nombre de Usuario</Form.Label>
                                    <Form.Control type="text" value={this.state.name} onChange={this.handleInputChange} name="name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="surname">
                                    <Form.Label>Apelidos</Form.Label>
                                    <Form.Control type="text" value={this.state.surname} onChange={this.handleInputChange} name="surname" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="pwd">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" value={this.state.pwd} onChange={this.handleInputChange} name="pwd" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" value={this.state.email} onChange={this.handleInputChange} name="email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="description">
                                    <Form.Label>descripcion</Form.Label>
                                    <Form.Control type="text" value={this.state.description} onChange={this.handleInputChange} name="description" />
                                </Form.Group>



                                <Button variant="dark" type="submit" className="botonet"> Registrarme </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Signup