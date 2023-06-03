const express = require('express');
const router = express.Router();
const List = require("../models/List.model");

//List Lists
router.get("/getAllList", (req, res, next) => {

    List
        .getAllList()
        .then(({ data }) => res.json(data))
        .catch(err => console.log(err))

    // .find()
    // .then((lists) => res.json(lists))
});

//Update
router.get('/:id/edit', (req, res, next) => {

    const { id } = req.params

    List
        .findById(id)
        .then((list) => res.render("List/List-edit", { list }))
        .catch(err => next(err))
});

router.post('/:id/edit', (req, res, next) => {

    const { title, cover, content } = req.body
    const { id } = req.params

    List
        .findByIdAndUpdate(id, { title, cover, content })
        .then(() => res.redirect('/'))
        .catch(err => next(err));
});

//Save mangas in list
// router.post('/:id/saveManga', (req, res, next) => {
//     const { id } = req.params;
//     const { mangaId } = req.body;
//     List.findById(id)
//         .then((list) => {
//             list.mangas.push(mangaId);
//             return list.save();
//         })
//         .then(() => res.redirect('/List'))
//         .catch((err) => next(err));
// });

//Delete
router.post('/:id/delete', (req, res, next) => {
    const { id } = req.params;
    List
        .findByIdAndDelete(id)
        .then(() => res.redirect('/List'))
        .catch((err) => next(err));
});

module.exports = router; 