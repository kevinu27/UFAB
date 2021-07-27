const express = require('express')
const router = express.Router()

const Job = require('./../models/Job.model')

// router.get('/getJobs', (req, res) => { /////:state aceptadas, rechazadas o pendiente de aprobación

//     Job
//         .find()
//         .then(response => res.json(response))
//         .catch(err => res.status(500).json({ code: 500, message: 'Error fetching coasters', err }))
// })

router.get('/getJobs', (req, res) => { /////:state aceptadas, rechazadas o pendiente de aprobación

    const userId = req.session.currentUser._id
    console.log(req.session.currentUser)
    Job
        .find({
            $or: [
                { sender: userId },
                { receiver: userId }
            ]
        })
        .populate("sender")
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching coasters', err }))
})


router.post('/newJob', (req, res) => {


    let job = { ...req.body }
    let { description } = req.body
    console.log(description)
    job.sender = req.session.currentUser._id


    Job
        .create(job)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error saving coasters', err }))
})


router.put('/editJob/:job_id', (req, res) => {

    const job = req.body

    Job
        .findByIdAndUpdate(req.params.job_id, job) //le paso con req.params.job_id lo que pilla de la url y con job le paso lo del formulario
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing coasters', err }))
})


router.get('/getOneJob/:job_id', (req, res) => {

    Job
        .findById(req.params.job_id) /// req.params es lo que le pasas por la url
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching coasters', err }))
})


module.exports = router