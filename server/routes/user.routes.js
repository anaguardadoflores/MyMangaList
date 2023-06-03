const express = require('express');
const router = require("express").Router()

const User = require("../models/User.model");

//Profile
router.get('/Profile', (req, res) => {

    const { _id } = req.session.currentUser

    User
        .findById(_id).populate('list')
        .then(user => {
            res.status(200).json({ user })
        })
        .catch(err => res.status(200).json({ message: err }))
})

//Update
router.get('/:_id/edit', (req, res, next) => {

    const { _id } = req.session.currentUser

    User
        .findById(_id)
        .then(user => res.render("user/ProfileEdit", user))
        .catch(err => next(err))
});

router.post('/:_id/edit', (req, res, next) => {

    const { username, email, password, avatar } = req.body

    const { _id } = req.session.currentUser

    User
        .findByIdAndUpdate(_id, { username, email, password, avatar })
        .then(() => res.redirect('/'))
        .catch(err => next(err))
});

//Delete
router.post('/:_id/delete', (req, res, next) => {

    const { _id } = req.session.currentUser

    User
        .findByIdAndDelete(_id)
        .then(() => res.redirect('/'))
        .catch(err => next(err))
});



module.exports = router;