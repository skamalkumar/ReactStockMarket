import React, { useContext } from "react";
import { MoonIcon } from "@heroicons/react/solid";
import ThemeContext from "../context/ThemeContext";

const ThemeIcon = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button onClick={toggleDarkMode}>
      <MoonIcon
        className={`w-8 h-8 cursor-pointer bg-slate-200 rounded-md absolute inset-y-0 right-12 top-3 fill-orange-300 ${
          darkMode ? "fill-red-900" : null
        }`}
      ></MoonIcon>
    </button>
  );
};

export default ThemeIcon;
