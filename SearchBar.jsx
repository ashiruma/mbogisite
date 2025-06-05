import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (q.trim()) navigate(`/search?q=${encodeURIComponent(q)}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "inline-block", marginLeft: "1rem" }}>
      <input
        value={q}
        onChange={e => setQ(e.target.value)}
        placeholder="Search blog..."
        style={{ padding: "0.3rem 0.7rem", borderRadius: 4, border: "1px solid #ccc" }}
      />
      <button type="submit" style={{ marginLeft: 4 }}>🔍</button>
    </form>
  );
};

export default SearchBar;