import React, { useEffect, useState } from "react";

export const Navbar = () => {
  const [active, setActive] = useState("All"); // All, Read, Unread

  // Function to toggle active state
  const toggleActive = (newActive) => {
    setActive(newActive);
  };

  // Check active state
  useEffect(() => {
    console.log(active);
  }, [active]);

  return (
    <div className="navbar">
      <div className="toggle-switch">
        <button
          className={`toggle-btn ${active === "All" ? "active" : ""}`}
          onClick={() => toggleActive("All")}
        >
          All
        </button>
        <button
          className={`toggle-btn ${active === "Read" ? "active" : ""}`}
          onClick={() => toggleActive("Read")}
        >
          Read
        </button>
        <button
          className={`toggle-btn ${active === "Unread" ? "active" : ""}`}
          onClick={() => toggleActive("Unread")}
        >
          Unread
        </button>
      </div>
    </div>
  );
};
