import { Component } from 'react'
import JobService from './../../../services/jobs.service'
import { Row } from 'react-bootstrap'
import JobCard from './JobCard'

class JobsList extends Component {

    constructor() {
        super()
        this.state = {
            jobs: undefined
        }
        this.jobService = new JobService()
    }

    componentDidMount = () => {
        this.jobService
            .getJobs2()
            .then(response => this.setState({ jobs: response.data }))
            .catch(err => console.log(err))
    }


    render() {
        return (
            this.state.jobs
                ?
                (<Row>
                    {this.state.jobs.map(elm => <JobCard key={elm.id} {...elm} />)}
                </Row>
                )
                :
                <p>Loading...</p>

        )
    }




}

export default JobsList