const express = require("express");
const employeeRoutes = require("./routes/employeeRoutes");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Built-in middleware
app.use(express.json());

// Custom logging middleware
app.use(logger);

// Routes
app.use("/employees", employeeRoutes);

// Error handling middleware
app.use(errorHandler);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
