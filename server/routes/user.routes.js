const express = require('express');
const router = require("express").Router()
const User = require("../models/User.model");

//Profile
router.get('/Profile', (req, res) => {

    const { id } = req.session.currentUser

    User
        .findById(id).populate('list')
        .then(user => {
            res.status(200).json({ user })
        })
        .catch(err => {
            res.status(400).json({ message: err })
            next(err)
        })
})

//LIST
router.get("/:id/getAllList", (req, res, next) => {

    const { id } = req.params

    User
        .findById(id).populate('lists')
        .then((lists) => res.json({ lists }))
        .catch(err => next(err))
});


//Update
router.get('/:id/edit', (req, res, next) => {

    const { id } = req.params

    User
        .findById(id)
        .then(user => res.status(200).json({ user }))
        .catch(err => {
            res.status(400).json({ message: err })
            next(err)
        })
});

router.post('/:id/edit', (req, res, next) => {

    const { username, email, password, avatar } = req.body

    const { id } = req.params

    User
        .findByIdAndUpdate(id, { username, email, password, avatar })
        .then(user => res.status(200).json({ user }))
        .catch(err => {
            res.status(400).json({ message: err })
            next(err)
        })
});

//Delete
router.post('/:id/delete', (req, res, next) => {

    const { id } = req.params;

    User
        .findByIdAndDelete(id, (err, user) => {
            if (err) {
                res.status(400).json({ message: err });
                return next(err);
            }
            res.status(200).json({ user });
        })
        .then(user => res.status(200).json({ user }))
        .catch(err => {
            res.status(400).json({ message: err })
            next(err)
        })
});

module.exports = router;