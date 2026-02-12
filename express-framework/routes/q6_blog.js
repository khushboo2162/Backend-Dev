const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

let posts = [];

app.get("/posts", (req, res) => {
  res.render("posts", { posts });
});

app.post("/posts", (req, res) => {
  posts.push(req.body);
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  res.render("post", { post: posts[req.params.id] });
});

app.listen(3000, () => console.log("Q6 running on port 3000"));

