const express = require('express')
const router = express.Router()

const RequestMessage = require('./../models/RequestMessage.model')
const Job = require('./../models/Job.model')
const User = require('./../models/User.model')


router.post('/newMessage', (req, res) => {

    let { message, jobId } = req.body
    let sender = req.session.currentUser._id


    RequestMessage
        .create({ message, sender })
        .then(response => Job.findByIdAndUpdate(jobId, { $push: { messages: response._id } }))
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error saving message', err }))
})




module.exports = router