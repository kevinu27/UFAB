const express = require('express')
const router = express.Router()
const Job = require('./../models/Job.model')

router.get('/getJobs', (req, res) => {

    const userId = req.session.currentUser._id

    Job
        .find({
            $or: [
                { sender: userId },
                { receiver: userId }
            ]
        })
        .populate("sender receiver")
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching coasters', err }))
})


router.post('/newJob', (req, res) => {

    let job = { ...req.body }
    let { description } = req.body
    job.sender = req.session.currentUser._id

    Job
        .create(job)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error saving coasters', err }))
})

router.put('/editJob/:job_id', (req, res) => {

    const job = req.body

    Job
        .findByIdAndUpdate(req.params.job_id, job)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing coasters', err }))
})


router.get('/getOneJob/:job_id', (req, res) => {

    Job
        .findById(req.params.job_id)
        .populate({
            path: 'messages',
            populate: {
                path: 'sender'
            }
        })
        .then(response => {
            res.json(response)
            console.log(response)
        })
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching coasters', err }))
})


module.exports = router