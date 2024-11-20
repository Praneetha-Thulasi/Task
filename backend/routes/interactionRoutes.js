const mongoose = require("mongoose")
const express = require("express");
const router = express.Router();
const Interaction = require("../models/Interaction");

// Get all interactions
router.get("/", async (req, res) => {
  try {
    const interactions = await Interaction.find().sort({ date: -1 });
    res.json(interactions);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// Add a new interaction
router.post("/", async (req, res) => {
  const { type, date, user, notes } = req.body;
  if (!type || !date || !user || !notes) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const newInteraction = new Interaction({ type, date, user, notes });
    await newInteraction.save();
    res.json(newInteraction);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// Delete an interaction
router.delete("/:id", async (req, res) => {
  try {
    const interactionId = req.params.id;

    // Check if the ID is valid before querying the database
    if (!mongoose.Types.ObjectId.isValid(interactionId)) {
      return res.status(400).json({ message: "Invalid interaction ID" });
    }

    // Try to find the interaction
    const interaction = await Interaction.findById(interactionId);
    if (!interaction) {
      return res.status(404).json({ message: "Interaction not found" });
    }

    // Attempt to delete the interaction using deleteOne
    await interaction.deleteOne();  // Replace remove() with deleteOne()
    res.json({ message: "Interaction removed" });
  } catch (err) {
    console.error("Error during deletion:", err); // Log the error
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});


module.exports = router;
