// Filter.js
import React, { useState } from "react";

const Filter = ({ interactions, setFilteredInteractions }) => {
  const [search, setSearch] = useState(""); // Search by notes
  const [filterType, setFilterType] = useState("all"); // Filter by activity type
  const [filterUser, setFilterUser] = useState(""); // Filter by user
  const [filterDate, setFilterDate] = useState(""); // Filter by date

  const handleSearch = () => {
    let filtered = [...interactions]; // Create a copy of interactions

    // Filter by search text (notes)
    if (search) {
      filtered = filtered.filter((interaction) =>
        interaction.notes.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by activity type
    if (filterType !== "all") {
      filtered = filtered.filter((interaction) => interaction.type === filterType);
    }

    // Filter by user
    if (filterUser) {
      filtered = filtered.filter((interaction) =>
        interaction.user.toLowerCase().includes(filterUser.toLowerCase())
      );
    }

    // Filter by date (if provided)
    if (filterDate) {
      filtered = filtered.filter(
        (interaction) => new Date(interaction.date).toLocaleDateString() === new Date(filterDate).toLocaleDateString()
      );
    }

    // Update the filtered interactions state
    setFilteredInteractions(filtered);
  };

  return (
    <div className="filter">
      {/* Search by Notes */}
      <input
        type="text"
        placeholder="Search by notes"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Filter by Activity Type */}
      <select onChange={(e) => setFilterType(e.target.value)}>
        <option value="all">All Types</option>
        <option value="email">Email</option>
        <option value="call">Call</option>
        <option value="meeting">Meeting</option>
        <option value="note">Note</option>
      </select>

      {/* Filter by User */}
      <input
        type="text"
        placeholder="Filter by user"
        value={filterUser}
        onChange={(e) => setFilterUser(e.target.value)}
      />

      {/* Filter by Date */}
      <input
        type="date"
        value={filterDate}
        onChange={(e) => setFilterDate(e.target.value)}
      />

      {/* Filter Button */}
      <button onClick={handleSearch}>Apply Filters</button>
    </div>
  );
};

export default Filter;
