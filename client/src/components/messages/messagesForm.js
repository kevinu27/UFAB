import { Component } from "react";
import { Form, Button, Container } from 'react-bootstrap'
import MessageService from './../../services/message.service'
import './bot.css'

class MessageForm extends Component {
    constructor(props) {
        super(props)
        this.state = { message: '', jobId: props.job_id }
        this.messageService = new MessageService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.messageService
            .createMessage({ message: this.state.message, jobId: this.state.jobId })
            .then(() => this.props.history.push('/jobs'))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <Container>
                    <Form onSubmit={this.handleFormSubmit}>
                        <Form.Group className="mb-3" controlId="message">
                            <Form.Control type="text" value={this.state.message} onChange={this.handleInputChange} name="message" />
                        </Form.Group>
                        <Button variant="dark" type="submit" className="bot"> Crear petición </Button>
                    </Form>
                </Container>
            </>
        )
    }
}

export default MessageForm