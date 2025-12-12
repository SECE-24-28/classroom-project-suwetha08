 const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");   // <-- your DB connection file
const studentRoutes = require("./routes/studentRoutes");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/api/students", studentRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port ${PORT}"));