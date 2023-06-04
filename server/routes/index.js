const router = require("express").Router();

const indexRoutes = require("./index.routes");
router.use("/", indexRoutes);

router.use("/auth", require('./auth.routes'));

router.use("/user", require('./user.routes'));

router.use("/list", require('./list.routes'));

const mangaRoutes = require("./manga.routes");
router.use("/mangas", mangaRoutes);

module.exports = router