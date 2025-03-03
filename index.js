function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let apiKey = "f333f4tb5038acab6309b2fo8d0b9912 ";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInputElement.value}&key=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
  let city = response.data.city;
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = `${city}`;
  let temp = Math.round(response.data.temperature.current);

  let tempElement = document.querySelector("#current-temp");
  tempElement.innerHTML = `${temp}`;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);