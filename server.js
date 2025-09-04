require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const MODE = process.env.MODE || "production";

// Middleware to parse JSON bodies
app.use(express.json());
//added comment
// Basic route fdsffd
app.get("/", (req, res) => {
  res.json({
    message: "Hello World!",
    mode: MODE,
    port: PORT,
    timestamp: new Date().toISOString(),
  });
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    mode: MODE,
    uptime: process.uptime(),
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running in ${MODE} mode on http://localhost:${PORT}`);
});
