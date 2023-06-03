const express = require("express");
const mangaService = require("../services/manga.services");
const router = express.Router();

//German
router.get("/getAllMangas", (req, res, next) => {
    mangaService
        .getAllMangas()
        .then(({ data }) => res.json(data))
        .catch(err => console.log(err))
});

//YO¿?
router.get("/getManga/:manga_id", (req, res, next) => {

    const { manga_id } = req.params

    mangaService
        .findById(manga_id)
        .then(({ data }) => res.json(data))
        .catch(err => next(err))
})

module.exports = router;
