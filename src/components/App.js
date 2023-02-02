import React, { useEffect, useState } from "react";

import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import SearchForm from "./SearchForm";
import ToggleTheme from "./ToggleTheme";
import getForecast from "../requests/getForecast";
import { useTheme } from "../context/ThemeProvider";

import "../styles/App.css";

const App = () => {
  const [location, setLocation] = useState({ city: "", country: "" });
  const [searchText, setSearchText] = useState("");
  const [forecasts, setForecasts] = useState([]);
  const [selectedDate, setSelectedDate] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const { darkTheme } = useTheme();

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );
  const handleForecastSelect = (date) => setSelectedDate(date);

  const handleCitySearch = () => {
    getForecast(
      searchText,
      setSelectedDate,
      setLocation,
      setForecasts,
      setErrorMessage
    );
    setSearchText("");
  };

  useEffect(() => {
    getForecast(
      "",
      setSelectedDate,
      setLocation,
      setForecasts,
      setErrorMessage
    );
  }, []);

  return (
    <div className={`weather-app ${darkTheme ? "dark" : "light"}`}>
      <SearchForm
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={handleCitySearch}
      />
      <LocationDetails
        city={location.city}
        country={location.country}
        errorMessage={errorMessage}
      />
      {!errorMessage && (
        <>
          <ForecastSummaries
            forecasts={forecasts}
            onForecastSelect={handleForecastSelect}
          />
          {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
        </>
      )}
      <ToggleTheme />
    </div>
  );
};

export default App;
