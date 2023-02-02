import React from "react";
import PropTypes from "prop-types";
import { removeYear } from "../module/formatDate";

import "../styles/weather-icons-wind.css";
import "../styles/ForecastDetails.css";

const ForecastDetails = ({ forecast }) => {
  const { date, temperature, humidity, wind } = forecast;
  const yearRemovedDate = removeYear(date);
  return (
    <div className="forecast-details">
      <div className="forecast-details__date">{yearRemovedDate}</div>
      <div className="forecast-details__temperature">
        <div>Max Temperature: {temperature.max}&deg;C</div>
        <div>Min Temperature: {temperature.min}&deg;C</div>
      </div>
      <div className="forecast-details__humidity">
        humidity: {humidity}&#37;
      </div>
      <div className="forecast-details__wind">
        <span className="forecast-details__wind--speed">
          wind: {wind.speed}mph&nbsp;
        </span>
        <span
          className={`forecast-details__wind--direction wi wi-wind wi-from-${wind.direction}`}
        />
      </div>
    </div>
  );
};

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ForecastDetails;
