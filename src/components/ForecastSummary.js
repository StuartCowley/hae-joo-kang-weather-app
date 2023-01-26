import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import { removeYear } from "../module/formatDate";

import "../styles/ForecastSummary.css";

const ForecastSummary = (props) => {
  const { date, description, icon, temperature, onSelect } = props;
  const yearRemovedDate = removeYear(date);

  return (
    <div
      role="button"
      tabIndex={0}
      className="forecast-summary"
      data-testid="forecast-summary"
      onClick={() => onSelect(date)}
    >
      <div className="forecast-summary__date">{yearRemovedDate}</div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon} />
      </div>
      <div className="forecast-summary__temperature">
        {temperature.max}&deg;C
      </div>
      <div className="forecast-summary__description">{description}</div>
      {/* <button
        type="button"
        className="forecast-summary__button"
        onClick={() => onSelect(date)}
      >
        More details
      </button> */}
    </div>
  );
};

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ForecastSummary;
