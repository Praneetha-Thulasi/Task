const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const interactionRoutes = require("./routes/interactionRoutes");

dotenv.config(); // Load environment variables
connectDB(); // Connect to MongoDB

const app = express();
app.use(cors()); // Enable Cross-Origin Requests
app.use(express.json()); // Parse JSON requests

// Define routes for interactions
app.use("/api/interactions", interactionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
