/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { useTheme } from "../context/ThemeProvider";

import "../styles/ToggleTheme.css";

const ToggleTheme = () => {
  const { setDarkTheme } = useTheme();

  const toggleHandler = () => {
    setDarkTheme((prev) => !prev);
  };

  return (
    <div className="toggle-container">
      <input type="checkbox" id="switch" onClick={toggleHandler} />
      <label htmlFor="switch">ToggleTheme</label>
    </div>
  );
};

export default ToggleTheme;
