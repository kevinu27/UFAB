import { Component } from 'react'
import { Form, Row, Col, Button, Container } from 'react-bootstrap'
import UserService from '../../../services/user.service'

class Login extends Component {

    constructor() {
        super()
        this.state = { pwd: '', email: '' }
        this.userService = new UserService()
    }


    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })

    }

    handleFormSubmit = e => {
        e.preventDefault()

        const { email, pwd } = this.state

        this.userService
            .login(email, pwd)
            .then(loggedUserfromServer => {
                console.log(loggedUserfromServer)
                this.props.storeUser(loggedUserfromServer.data)
                this.props.history.push('/')
            })
            .catch(err => console.log(err))
    }




    render() {
        return (

            <>

                <Container>

                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <h1>Inicio de sesión</h1>

                            <hr></hr>

                            <Form onSubmit={this.handleFormSubmit}>

                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" value={this.state.email} onChange={this.handleInputChange} name="email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="pwd">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" value={this.state.pwd} onChange={this.handleInputChange} name="pwd" />
                                </Form.Group>



                                <Button variant="dark" type="submit"> Iniciar sesión </Button>
                            </Form>

                        </Col>


                    </Row>


                </Container>
            </>


        )
    }


}


export default Login