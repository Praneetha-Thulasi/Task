// AddInteractionForm.js
import React, { useState } from "react";
import axios from "axios";

const AddInteractionForm = ({ setInteractions }) => {
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
        setType(""); // Reset the form fields
        setDate("");
        setUser("");
        setNotes("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="User"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <textarea
        placeholder="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <button type="submit">Add Interaction</button>
    </form>
  );
};

export default AddInteractionForm;
