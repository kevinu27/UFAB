import { Component } from 'react'
//import { response } from '../../../../../server/app'
import JobService from '../../../services/jobs.service'
import { Container, Row, Col } from 'react-bootstrap'
import MessageForm from './../../messages/messagesForm'
import MessageService from '../../../services/message.service'
import './JobDetail.css'

class JobDetails extends Component {
    constructor() {
        super()
        this.state = {
            job: undefined
        }
        this.jobService = new JobService()
        this.messageService = new MessageService()
    }

    componentDidMount() {
        this.loadJob()
    }

    loadJob() {
        const { job_id } = this.props.match.params
        this.jobService
            .getOneJob(job_id)
            .then(response => {
                this.setState({ job: response.data })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            !this.state.job ? <h1>Loading....</h1> :
                <>
                    <Container>
                        <Row>
                            <Col md={10}>
                                <h1>Detalles</h1>
                                <hr></hr>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>

                            <Col md={2}>
                                <p> jobType: {this.state.job.jobType}</p>
                                <p> status: {this.state.job.status}</p>
                                <p> Description: {this.state.job.description}</p>
                                <p> deliveryAdress: {this.state.job.deliveryAdress}</p>
                            </Col>

                            <Col md={10}>
                                <h4>Mensajes:</h4>
                                {this.state.job.messages.map(elm => <> <div className="name"> <strong> <p> {elm.sender.name} :</p> </strong></div> <div className="Message">  <p><i> {elm.message}</i> </p></div></>)}
                                <MessageForm loggedUser={this.props.loggedUser} job_id={this.state.job._id} {...this.props} />
                            </Col>
                        </Row>
                    </Container>
                </>
        )
    }

}

export default JobDetails