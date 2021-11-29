import axios from "axios";

const API_KEY = "3671537fd2c98e11407eb75af4c14e7c";

function getCurrentWeather(location) {
  return axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${API_KEY}`
  );
}

function getForecast(lat, lon) {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`
  );
}
export { getCurrentWeather, getForecast };
