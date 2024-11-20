import React, { useState } from "react";
import "./InteractionList.css"; // Add your styles here

const InteractionList = ({ interactions }) => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle visibility

  const toggleHistory = () => {
    setIsOpen(!isOpen); // Toggle the isOpen state
  };

  return (
    <div className="interaction-list-container">
      {/* History Button */}
      <button className="history-button" onClick={toggleHistory}>
        {isOpen ? "Hide History" : "Show History"}
      </button>

      {/* Interaction List */}
      {isOpen && (
        <ul className="interaction-list">
          {interactions.map((interaction) => (
            <li key={interaction._id} className="interaction-item">
              <p>
                <strong>Type:</strong> {interaction.type}
              </p>
              <p>
                <strong>Date:</strong> {new Date(interaction.date).toLocaleDateString()}
              </p>
              <p>
                <strong>User:</strong> {interaction.user}
              </p>
              <p>
                <strong>Notes:</strong> {interaction.notes}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InteractionList;
