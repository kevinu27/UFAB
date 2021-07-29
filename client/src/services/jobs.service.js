import axios from 'axios'

class JobService {

    constructor() {
        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_BASE_URL}/jobs`,
            withCredentials: true
        })
    }

    getJobs = () => this.app.get('/getMyJobs')
    getJobs2 = () => this.app.get(`/getJobs`) //// solo de prueba despues se va
    getOneJob = job_id => this.app.get(`/getOneJob/${job_id}`)
    createJob = job_info => this.app.post('/newJob', job_info)
    editJob = () => this.app.put('/editJob/:job_id')

}

export default JobService