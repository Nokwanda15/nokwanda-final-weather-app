function submitted(event) {
  event.preventDefault();
  let box = document.querySelector("#searchbox");
  let currentCity = document.querySelector("#city-name");
  currentCity.innerHTML = box.value;
}

let searchBoxElement = document.querySelector("#search-field");
searchBoxElement.addEventListener("submit", submitted);
