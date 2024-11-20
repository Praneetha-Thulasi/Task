// InteractionList.js
import React from "react";
import axios from "axios";
import InteractionItem from "./InteractionItem";

const InteractionList = ({ interactions, setInteractions }) => {
  const deleteInteraction = (id) => {
    // Send DELETE request to backend
    axios
      .delete(`http://localhost:5000/api/interactions/${id}`)
      .then(() => {
        // Remove the deleted interaction from state
        setInteractions(interactions.filter((interaction) => interaction._id !== id));
      })
      .catch((error) => {
        console.error("Error deleting interaction:", error);
        alert("Failed to delete the interaction");
      });
  };

  return (
    <div className="interaction-list">
      {interactions.map((interaction) => (
        <InteractionItem
          key={interaction._id}
          interaction={interaction}
          deleteInteraction={deleteInteraction}
        />
      ))}
    </div>
  );
};

export default InteractionList;
