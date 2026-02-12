const express = require("express");
const app = express();

const users = [
  { name: "Amit" },
  { name: "Deepika" },
  { name: "Rohit" }
];

app.get("/users", (req, res) => {
  const name = req.query.name;

  if (!name) return res.json(users);

  const result = users.filter(u =>
    u.name.toLowerCase().includes(name.toLowerCase())
  );

  res.json(result);
});

app.listen(3000, () => console.log("Q1 running on port 3000"));
