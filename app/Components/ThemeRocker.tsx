"use client";

import { GlobalContext } from "../context/globalContext";
import { useContext } from "react";

/** Two-position lights switch: day on the left, night on the right. */
export default function ThemeRocker() {
  const { prefersDarkMode, setPrefersDarkMode, storageIsAvailable } =
    useContext(GlobalContext);

  function toggleColorMode() {
    const isDark = document.documentElement.classList.toggle("dark");

    if (storageIsAvailable) {
      localStorage.setItem("colorMode", isDark ? "dark" : "light");
    }
    setPrefersDarkMode(isDark);
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={prefersDarkMode}
      aria-label="Night mode"
      className="rocker stamp"
      onClick={toggleColorMode}
    >
      <span className={prefersDarkMode ? "" : "rocker-on"}>Day</span>
      <span className={prefersDarkMode ? "rocker-on" : ""}>Night</span>
    </button>
  );
}
