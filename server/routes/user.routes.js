const express = require('express')
const router = express.Router()


const bcrypt = require("bcrypt")
const bcryptSalt = 10

const User = require('./../models/User.model')

// signup 

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

//Login

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



router.put('/:id', (req, res) => {

    const userId = req.params.id
    const user = req.body
    user.location = { type: "Point", coordinates: [user.position.lat, user.position.lng] }

    User
        .findByIdAndUpdate(userId, user) //le paso con req.params.user_id lo que pilla de la url y con job le paso lo del formulario
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing coasters', err }))
})


router.get('/:id', (req, res) => {

    console.log("llamadahecha")
    const user = req.params.id

    User
        .findById(user) /// req.params es lo que le pasas por la url
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching coasters', err }))


})

router.get('/', (req, res) => {


    User
        .find({})
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching coasters', err }))
})

module.exports = router