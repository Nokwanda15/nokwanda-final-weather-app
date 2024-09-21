function showCityWeather(response) {
  let temperature = document.querySelector("#temp-value");
  let temp = response.data.temperature.current;
  temperature.innerHTML = Math.round(temp);

  let currentCity = document.querySelector("#city-name");
  currentCity.innerHTML = response.data.city;
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
