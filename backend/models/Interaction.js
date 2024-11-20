const mongoose = require("mongoose");

const interactionSchema = new mongoose.Schema({
  type: { type: String, required: true }, // Email, Call, Meeting, etc.
  date: { type: Date, required: true },
  user: { type: String, required: true },
  notes: { type: String, required: true },
});

module.exports = mongoose.model("Interaction", interactionSchema);
