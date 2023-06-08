const router = require("express").Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('./../models/User.model')
const { isAuthenticated } = require("./../middleware/verifyToken.middleware")
const saltRounds = 10

router.post('/signup', (req, res, next) => {

    const { email, password, username, avatar } = req.body

    if (password.length < 2) {
        res.status(400).json({ message: 'Password must have at least 2 characters' })
        return
    }

    User
        .findOne({ email })
        .then((foundUser) => {

            if (foundUser) {
                res.status(400).json({ message: "User already exists." })
                return
            }

            const salt = bcrypt.genSaltSync(saltRounds)
            const hashedPassword = bcrypt.hashSync(password, salt)

            return User.create({ email, password: hashedPassword, username, avatar: avatar || 'https://i.pinimg.com/originals/f8/1b/a6/f81ba6a46659f461955e27a8959ced46.jpg' })
        })
        .then((createdUser) => {

            const { email, username, _id, avatar } = createdUser
            const user = { email, username, _id, avatar }

            res.status(201).json({ user })
        })
        .catch(err => {
            next(err)
        })
})


router.post('/login', (req, res, next) => {

    const { email, password } = req.body;

    if (email === '' || password === '') {
        res.status(400).json({ message: "Provide email and password." });
        return;
    }

    User
        .findOne({ email })
        .then((foundUser) => {

            if (!foundUser) {
                res.status(401).json({ message: "User not found." })
                return;
            }

            if (bcrypt.compareSync(password, foundUser.password)) {

                const { _id, email, username, avatar } = foundUser;

                const payload = { _id, email, username, avatar }

                const authToken = jwt.sign(
                    payload,
                    process.env.TOKEN_SECRET,
                    { algorithm: 'HS256', expiresIn: "6h" }
                )

                res.json({ authToken: authToken });
            }
            else {
                res.status(401).json({ message: "Unable to authenticate the user" });
            }

        })
        .catch(err => next(err));
})



router.get('/verify', isAuthenticated, (req, res, next) => {

    console.log('EL USUARIO TIENE UN TOKEN CORRECTO Y SUS DATOS SON', req.payload)

    User.findOne({ email: req.payload.email }).then((foundUser) => res.status(200).json(foundUser))

})

module.exports = router