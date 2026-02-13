const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.post("/contact", (req, res) => {
  res.send("Form submitted");
});

app.listen(3000, () => console.log("Q3 running on port 3000"));
