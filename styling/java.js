function showCityWeather(response) {
  console.log(response);
  let temperature = document.querySelector("#temp-value");
  let temp = response.data.temperature.current;
  temperature.innerHTML = Math.round(temp);

  let conditionElement = document.querySelector("#weather-condition");
  conditionElement.innerHTML = response.data.condition.description;

  let currentCity = document.querySelector("#city-name");
  currentCity.innerHTML = response.data.city;

  let humidityElement = document.querySelector("#humid");
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;

  let windElement = document.querySelector("#windy");
  windElement.innerHTML = `${response.data.wind.speed}km/h`;

  let currentDate = new Date(response.data.time * 1000);

  let currentTime = document.querySelector("#time");
  currentTime.innerHTML = formatDate(currentDate);
}
function formatDate(currentDate) {
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  console.log(currentDate.getHours);

  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let today = week[currentDate.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${today} ${hours}:${minutes}`;
}

function enteredCity(name) {
  let apiKey = `9ceba7ba7t6e28o34065e0b00b4cfe71`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${name}&key=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(showCityWeather);
}

function submitted(event) {
  event.preventDefault();
  let box = document.querySelector("#searchbox");

  enteredCity(box.value);
}

let searchBoxElement = document.querySelector("#search-field");
searchBoxElement.addEventListener("submit", submitted);

enteredCity(`Johannesburg`);
