const express = require('express');
const router = express.Router();
const List = require("../models/List.model");

//List Lists
router.get("/getAllList", (req, res, next) => {

    List
        .find()
        .then(({ data }) => res.json(data))
        .catch(err => next(err))

});
//Create



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
        .then(list => res.status(200).json({ list }))
        .catch((err) => next(err));
});

//Delete
router.post('/:id/delete', (req, res, next) => {
    const { id } = req.params;
    List
        .findByIdAndDelete(id)
        .then(() => res.redirect('/List'))
        .catch((err) => next(err));
});

module.exports = router; 