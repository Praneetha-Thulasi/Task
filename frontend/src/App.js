// App.js
import React, { useState, useEffect } from "react";
import InteractionList from "./components/InteractionList";
import AddInteractionForm from "./components/AddInteractionForm";
import Filter from "./components/Filter";
import axios from "axios";
import './styles.css';

function App() {
  const [interactions, setInteractions] = useState([]);
  const [filteredInteractions, setFilteredInteractions] = useState([]);

  useEffect(() => {
    // Fetch interactions when the component mounts
    axios
      .get("http://localhost:5000/api/interactions")  // Make sure your backend is running
      .then((response) => {
        setInteractions(response.data);
        setFilteredInteractions(response.data); // Initially, show all interactions
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <h1>Lead Interaction History</h1>
      <AddInteractionForm setInteractions={setInteractions} />
      <Filter
        interactions={interactions}            // Pass interactions for filtering
        setFilteredInteractions={setFilteredInteractions}  // Pass function to update filtered list
      />
      <InteractionList
        interactions={filteredInteractions}     // Display filtered interactions
        setInteractions={setInteractions}      // Pass setInteractions to delete or update
      />
    </div>
  );
}

export default App;
