const express = require("express");

const app = express();

// Middleware
app.use(express.json());

// Import Routes
const bookRoutes = require("./router/bookroute");

// Use Routes
app.use("/", bookRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("Books API is running...");
});

// Start Server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
