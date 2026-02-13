const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

// serve static files
app.use("/public", express.static("public"));

// gallery route
const galleryRoute = require("./routes/q5_gallery");
app.use(galleryRoute);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
