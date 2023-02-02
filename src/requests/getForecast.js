import axios from "axios";

const getForecast = (
  searchText,
  setSelectedDate,
  setLocation,
  setForecasts,
  setErrorMessage
) => {
  let endpoint = "https://cmd-shift-weather-app.onrender.com/forecast";

  if (searchText) {
    endpoint += `?city=${searchText}`;
  }

  axios
    .get(endpoint)
    .then((response) => {
      setSelectedDate(response.data.forecasts[0].date);
      setLocation(response.data.location);
      setForecasts(response.data.forecasts);
      setErrorMessage(null);
    })
    .catch((error) => {
      const { status } = error.response;
      if (status === 404) {
        setErrorMessage("No such town or city, try again!");
        console.error("Location is not valid", error);
      }
      if (status === 500) {
        setErrorMessage("Oops, somthing wrong with server. Try again!");
        console.error("Server error", error);
      }
    });
};

export default getForecast;
