const router = require("express").Router();

router.use("/books", require("./book.route"));

module.exports = router