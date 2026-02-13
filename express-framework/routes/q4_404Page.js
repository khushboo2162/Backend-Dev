const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Home page");
});

app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(3000, () => console.log("Q4 running on port 3000"));
