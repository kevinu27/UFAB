import { Component } from 'react'
import { Form, Row, Col, Button, Container } from 'react-bootstrap'
import UserService from '../../../services/user.service'

class Signup extends Component {

    constructor() {
        super()
        this.state = { name: '', pwd: '', email: '' }
        this.userService = new UserService()
    }


    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })

    }

    handleFormSubmit = e => {
        e.preventDefault()

        const { name, pwd, email } = this.state

        this.userService
            .signup(name, pwd, email)
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


                                <Form.Group className="mb-3" controlId="pwd">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" value={this.state.pwd} onChange={this.handleInputChange} name="pwd" />
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

                        </Col>


                    </Row>


                </Container>
            </>


        )
    }


}


export default Signup