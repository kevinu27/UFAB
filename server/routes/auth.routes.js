const express = require('express')
const router = express.Router()
const bcrypt = require("bcrypt")
const bcryptSalt = 10
const User = require('./../models/User.model')

router.post('/signup', (req, res) => {

    const { name, pwd, email, description } = req.body

    User
        .findOne({ email })
        .then(user => {

            if (user) {
                res.status(400).json({ code: 400, message: 'there is a user with the same email' })
                return
            }
            const salt = bcrypt.genSaltSync(bcryptSalt)
            const hashPass = bcrypt.hashSync(pwd, salt)

            User
                .create({ name, pwd: hashPass, email, description })
                .then(() => res.json({ code: 200, message: 'User created' }))
                .catch(err => res.status(500).json({ code: 500, message: 'DB error while creating user', err }))

        }).catch(err => res.status(500).json({ code: 500, message: 'DB error while fetching user', err }))
})

router.post('/login', (req, res) => {

    const { email, pwd } = req.body

    User
        .findOne({ email })
        .then(user => {
            if (!user) {
                res.status(401).json({ code: 401, message: 'email not registered' })
                return
            }
            if (bcrypt.compareSync(pwd, user.pwd) === false) {
                res.status(401).json({ code: 401, message: 'Incorect password' })
                return
            }
            req.session.currentUser = user
            res.json(req.session.currentUser)
        })
        .catch(err => res.status(500).json({ code: 500, message: 'DB error while fetching user', err }))
})

router.get('/logout', (req, res) => {
    req.session.destroy((err) => res.json({ mssage: 'Logout successful' }));
})

router.post('/isloggedin', (req, res) => {
    req.session.currentUser ? res.json(req.session.currentUser) : res.status(401).json({ code: 401, message: 'Unauthorized' })
})

module.exports = router