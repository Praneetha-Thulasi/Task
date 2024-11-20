import React, { useState, useEffect } from "react";
import InteractionList from "./components/InteractionList";
import AddInteractionForm from "./components/AddInteractionForm";
import Filter from "./components/Filter";
import axios from "axios";
// import "./styles.css";
import './App.css'

function App() {
  const [interactions, setInteractions] = useState([]); // State for interactions
  const [filteredInteractions, setFilteredInteractions] = useState([]); // State for filtered interactions
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  useEffect(() => {
    // Fetch interactions when the component mounts
    axios
      .get("http://localhost:5000/api/interactions") // Make sure your backend is running
      .then((response) => {
        setInteractions(response.data);
        setFilteredInteractions(response.data); // Initially, show all interactions
      })
      .catch((error) => console.log(error));
  }, []);

  // Function to open the modal
  const handleAddInteractionClick = () => {
    setShowModal(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <h1>Lead Interaction History</h1>
      <button className="add-button" onClick={handleAddInteractionClick}>
        Add Interaction
      </button>
      {showModal && (
        <AddInteractionForm
          onClose={handleCloseModal} // Pass the close function to the modal
          setInteractions={setInteractions} // Pass the function to update interactions
        />
      )}
      <Filter
        interactions={interactions} // Pass interactions for filtering
        setFilteredInteractions={setFilteredInteractions} // Pass function to update filtered list
      />
      <InteractionList
        interactions={filteredInteractions} // Display filtered interactions
        setInteractions={setInteractions} // Pass setInteractions to delete or update
      />
    </div>
  );
}

export default App;
