// InteractionItem.js
import React from "react";

const InteractionItem = ({ interaction, deleteInteraction }) => {
  return (
    <div className="interaction-item">
      <p>
        <strong>{interaction.type}</strong> -{" "}
        {new Date(interaction.date).toLocaleDateString()}
      </p>
      <p>User: {interaction.user}</p>
      <p>{interaction.notes}</p>
      <button onClick={() => deleteInteraction(interaction._id)}>Delete</button>
    </div>
  );
};

export default InteractionItem;
