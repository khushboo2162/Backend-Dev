const express = require("express");
const app = express();

app.use((req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    console.log(`${req.method} ${req.url} - ${Date.now() - start}ms`);
  });

  next();
});

app.get("/", (req, res) => {
  res.send("Response time logged");
});

app.listen(3000, () => console.log("Q2 running on port 3000"));
