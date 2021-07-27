import { Component } from 'react'
//import { response } from '../../../../../server/app'
import JobService from '../../../services/jobs.service'
import { Container, Row, Col } from 'react-bootstrap'

class JobDetails extends Component {

    constructor() {

        super()
        this.state = {
            job: undefined
        }
        this.jobService = new JobService()
    }

    componentDidMount() {


        console.log(this.props, 'estas son las props')
        this.loadJob()

    }

    loadJob() {

        const { job_id } = this.props.match.params
        this.jobService
            .getOneJob(job_id)
            .then(response => {
                console.log(response)
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
                        </Row>
                    </Container>
                </>

        )
    }

}

export default JobDetails