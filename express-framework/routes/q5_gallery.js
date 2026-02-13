const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

router.get("/gallery", (req, res) => {
  const imagePath = path.join(__dirname, "../public");
  const files = fs.readdirSync(imagePath);

  res.render("index", { images: files });
});

module.exports = router;
