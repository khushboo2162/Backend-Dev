const express = require("express");
const router = express.Router();
const { getAllBooks } = require("../controller/bookcontroller");

router.get("/books", getAllBooks);

module.exports = router;
