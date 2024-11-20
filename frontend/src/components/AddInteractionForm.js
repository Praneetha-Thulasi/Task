import React, { useState } from "react";
import axios from "axios";
import './AddInteractionForm.css'

const AddInteractionForm = ({ onClose, setInteractions }) => {
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [user, setUser] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newInteraction = { type, date, user, notes };

    // Send POST request to add the interaction
    axios
      .post("http://localhost:5000/api/interactions", newInteraction)
      .then((response) => {
        // Update the state with the new interaction
        setInteractions((prev) => [response.data, ...prev]); // Add the new interaction to the state
        onClose(); // Close the modal after saving the interaction
        setType(""); // Reset the form fields
        setDate("");
        setUser("");
        setNotes("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add Interaction</h2>
        <form onSubmit={handleSubmit}>
          {/* Interaction Type */}
          <select name="type" value={type} onChange={(e) => setType(e.target.value)} required>
            <option value="">Select Type</option>
            <option value="email">Email</option>
            <option value="call">Call</option>
            <option value="meeting">Meeting</option>
          </select>

          {/* Date Input */}
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          {/* User Input */}
          <input
            type="text"
            name="user"
            value={user}
            placeholder="User Name"
            onChange={(e) => setUser(e.target.value)}
            required
          />

          {/* Notes / Description */}
          <textarea
            name="notes"
            value={notes}
            placeholder="Add a description"
            onChange={(e) => setNotes(e.target.value)}
            required
          />

          {/* Buttons */}
          <div className="button-container">
            <button type="submit" className="submit-button">Save</button>
            <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddInteractionForm;
