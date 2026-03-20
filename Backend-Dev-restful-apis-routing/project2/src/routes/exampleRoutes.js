const express = require("express");
const validateYear = require("../middleware/validateYear");

const router = express.Router();

router.get("/", validateYear, (req, res) => {
    res.json({
        message: `Valid year: ${req.year}`
    });
});

module.exports = router;
