import React, { useState } from "react";
import "./Filter.css";

const Filter = ({ interactions, setFilteredInteractions }) => {
  const [search, setSearch] = useState(""); // Search by notes
  const [filterType, setFilterType] = useState(""); // Filter by activity type
  const [filterUser, setFilterUser] = useState(""); // Filter by user
  const [filterDate, setFilterDate] = useState(""); // Filter by date

  const applyFilters = () => {
    let filtered = [...interactions]; // Copy the interactions for filtering

    // Filter by search text (notes)
    if (search.trim() !== "") {
      filtered = filtered.filter((interaction) =>
        interaction.notes.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by activity type
    if (filterType) {
      filtered = filtered.filter((interaction) => interaction.type === filterType);
    }

    // Filter by user
    if (filterUser.trim() !== "") {
      filtered = filtered.filter((interaction) =>
        interaction.user.toLowerCase().includes(filterUser.toLowerCase())
      );
    }

    // Filter by date
    if (filterDate) {
      filtered = filtered.filter(
        (interaction) => new Date(interaction.date).toLocaleDateString() === new Date(filterDate).toLocaleDateString()
      );
    }

    // Update the filtered interactions state
    setFilteredInteractions(filtered);
  };

  return (
    <div className="filter-bar-container">
      <h2>Filter Interactions</h2>
      <div className="filter-bar">
        {/* Search by Notes */}
        <input
          type="text"
          className="filter-input"
          placeholder="Search by notes"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Filter by Activity Type */}
        <select
          className="filter-select"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="email">Email</option>
          <option value="call">Call</option>
          <option value="meeting">Meeting</option>
          <option value="note">Note</option>
        </select>

        {/* Filter by User */}
        <input
          type="text"
          className="filter-input"
          placeholder="Filter by user"
          value={filterUser}
          onChange={(e) => setFilterUser(e.target.value)}
        />

        {/* Filter by Date */}
        <input
          type="date"
          className="filter-input"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
        />

        {/* Apply Filter Button */}
        <button className="filter-button" onClick={applyFilters}>
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
