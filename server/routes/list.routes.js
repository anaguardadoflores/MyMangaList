const express = require('express');
const router = express.Router();
const List = require("../models/List.model");
const Mangas = require('./manga.routes')
const User = require("../models/User.model");

//Create
router.post("/:id/createList", (req, res, next) => {
    const { title, cover } = req.body;
    const { id } = req.params;

    const newList = new List({ title, cover: cover || 'https://i.pinimg.com/originals/b3/e1/44/b3e1440f17b11f34677ddf69913b7003.jpg' });

    newList
        .save()
        .then(createdList => {
            User
                .findByIdAndUpdate(
                    id,
                    { $addToSet: { lists: createdList._id } },
                    { new: true }
                ).populate('lists')
                .then(updatedUser => {
                    res.json(updatedUser);
                })
                .catch(err => next(err));
        })
        .catch(err => next(err));
});


// router.post("/:id/createList", (req, res, next) => {

//     const { title, cover } = req.body;

//     const { id } = req.params;

//     const newList = new List({ title, cover });

//     List
//         .create({ title, cover })
//         .then(createdList => {
//             User
//                 .findByIdAndUpdate(id, { $addToSet: { lists: createdList._id } }, { new: true })
//                 .then(updatedUser => res.json(updatedUser))
//                 .catch(err => next(err))
//         })
//         .catch(err => next(err))


// newList
//     .save()
//     .then((list) => {

//         User
//             .findById(id)
//             .then((user) => {
//                 user.lists.push(list._id)
//                 return user.save()
//             })
//             .catch(err => next(err))
//         res.status(201).json({ list })
//     })
//     .catch(err => next(err))
// });


//Update
router.get('/:id/edit', (req, res, next) => {

    const { id } = req.params;

    List
        .findById(id)
        .then(list => res.status(200).json({ list }))
        .catch(err => next(err))
});

router.post('/:id/edit', (req, res, next) => {

    const { title, cover } = req.body;

    const { id } = req.params;

    List
        .findByIdAndUpdate(id, { title, cover }, { new: true })
        .then(list => res.status(200).json({ list }))
        .catch(err => next(err))
});

//Save mangas in list
router.post('/:_id/saveManga', (req, res, next) => {

    const { _id } = req.params;

    const {
        id,
        title,
        images,
        type,
        status,
        score,
        chapters,
        synopsis,
        authors,
        genres,
    } = req.body;


    List
        .findById(_id)
        .then((list) => {
            if (!list) {
                return res.status(404).json({ error: 'List not found' });
            }
            list.content.push({
                id,
                title,
                images,
                type,
                status,
                score,
                chapters,
                synopsis,
                authors,
                genres,
            });
            return list.save();
        })
        .then((savedList) => {
            res.status(200).json({ list: savedList });
        })
        .catch((err) => next(err));
});

//Delete
router.post('/:id/delete', (req, res, next) => {

    const { id } = req.params;
    List
        .findByIdAndDelete(id)
        .then(list => {
            if (!list) {
                return res.status(404).json({ message: 'List not found' });
            }
            res.status(200).json({ list });
        })
        .catch((err) => next(err));
});

module.exports = router; 