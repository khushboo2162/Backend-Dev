const express = require("express");
const exampleRoutes = require("./routes/exampleRoutes");

const app = express();

app.use(express.json());

app.use("/api", exampleRoutes);

module.exports = app;
