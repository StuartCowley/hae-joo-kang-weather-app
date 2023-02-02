import React from "react";
import PropTypes from "prop-types";
import ForecastSummary from "./ForecastSummary";
import "../styles/ForecastSummaries.css";

const ForecastSummaries = ({ forecasts, onForecastSelect }) => {
  return (
    <div className="forecast-summaries">
      {forecasts.map((forecast) => (
        <ForecastSummary
          forecast={forecast}
          key={forecast.date}
          onSelect={onForecastSelect}
        />
      ))}
    </div>
  );
};

ForecastSummaries.propTypes = {
  forecasts: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
  onForecastSelect: PropTypes.func.isRequired,
};

export default ForecastSummaries;
