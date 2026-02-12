const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/gallery", (req, res) => {
  res.render("gallery", {
    images: ["img1.jpg", "img2.jpg"]
  });
});

app.listen(3000, () => console.log("Q5 running on port 3000"));
