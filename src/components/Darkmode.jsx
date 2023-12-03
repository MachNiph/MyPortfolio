import React, { useState, useEffect } from "react";
import { IoIosSunny } from "react-icons/io";
import { FiMoon } from "react-icons/fi";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="flex items-center ">
      <button
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle Dark Mode"
        className="focus:outline-none transition-all duration-300 ease-in-out "
      >
        {darkMode ? (
          <FiMoon className="text-white text-2xl " />
        ) : (
          <IoIosSunny className="text-yellow-400 text-2xl" />
        )}
      </button>
    </div>
  );
};

export default DarkModeToggle;
