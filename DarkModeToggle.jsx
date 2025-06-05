import React, { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [dark, setDark] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    if (dark) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [dark]);

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={() => setDark((d) => !d)}
      style={{
        marginLeft: "1rem",
        padding: "0.5rem 1rem",
        borderRadius: 4,
        border: "none",
        cursor: "pointer",
      }}
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};

export default DarkModeToggle;