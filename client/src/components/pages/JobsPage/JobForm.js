import { Component } from "react";
import { Form, Button, Container } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap-floating-label'
import JobService from "../../../services/jobs.service";


class JobForm extends Component {

    constructor(props) {
        super(props)
        this.state = { jobType: '', description: '', deliveryAdress: '' }
        this.jobService = new JobService()

    }


    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()

        this.jobService
            .createJob({ ...this.state, sender: this.props.sender, receiver: this.props.receiver })
            .then(() => this.props.history.push('/jobs'))
            .catch(err => console.log(err))
    }


    render() {
        return (
            <>
                <h1> Crea una petición de JobList</h1>
                <Container>
                    <Form onSubmit={this.handleFormSubmit}>
                        <Form.Group className="mb-3" controlId="jobType">
                            <Form.Label>jobType</Form.Label>
                            <Form.Control type="text" value={this.state.jobType} onChange={this.handleInputChange} name="jobType" />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="deliveryAdress">
                            <Form.Label>dirreccion de envio</Form.Label>
                            <Form.Control type="text" value={this.state.deliveryAdress} onChange={this.handleInputChange} name="deliveryAdress" />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="Description">
                            <Form.Label>Descripcion</Form.Label>
                            <Form.Control type="text" value={this.state.description} onChange={this.handleInputChange} name="description" />
                        </Form.Group>

                        {/* <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
                            <Form.Control as="textarea" placeholder="Leave a comment here" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingTextarea2" label="Comments">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel> */}


                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Button variant="dark" type="submit"> Crear petición </Button>
                    </Form>
                </Container>
            </>
        )

    }

}

export default JobForm