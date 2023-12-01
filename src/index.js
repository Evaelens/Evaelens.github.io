function celsiusButton(response) {
  let temperature = document.querySelector("#temperature")
  temperature.innerHTML = Math.round(response.data.temperature.current)
}

function currentCelsiusButton (event) {
  event.preventDefault()
  let enterCIty = document.querySelector("#exampleInputEmail1");

  let apiKey = "7oc0fb947c5cfcdf44a3340t6bccb6f9";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${enterCIty.value}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(celsiusButton);
}

function FahrenheitButton(response) {
  let temperature = document.querySelector("#temperature")
  temperature.innerHTML = Math.round(response.data.temperature.current)
}

function currentFahrenheitButton (event) {
  event.preventDefault()
  let enterCIty = document.querySelector("#exampleInputEmail1");

  let apiKey = "7oc0fb947c5cfcdf44a3340t6bccb6f9";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${enterCIty.value}&key=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(FahrenheitButton);
}


function webCity(response) {
  let city = document.querySelector("#city");
  let enterCIty = document.querySelector("#exampleInputEmail1");
  let newCity = enterCIty.value
  let temperature = document.querySelector("#temperature");
  let newTemperature = Math.round(response.data.temperature.current);

  temperature.innerHTML = newTemperature
  city.innerHTML = (newCity);
}

function searchCity(event) {
  event.preventDefault()
  let enterCIty = document.querySelector("#exampleInputEmail1");

  let apiKey = "7oc0fb947c5cfcdf44a3340t6bccb6f9";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${enterCIty.value}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(webCity);
}

function show(response) {

  let temperature = document.querySelector("#temperature")
  let temp = Math.round(response.data.temperature.current)

  temperature.innerHTML = temp
}


let date = document.querySelector("#date")
let now = new Date()
let hour = String(now.getHours()).padStart(2, '0')
let minute = String(now.getMinutes()).padStart(2,'0')
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let day = days[now.getDay()]
date.innerHTML = (day + " " + hour + ":" + minute)

let search = document.querySelector("#search-bar")
search.addEventListener("submit", searchCity)

let city = "Nigeria"
let temperature = document.querySelector("#temperature")
let apiKey = "7oc0fb947c5cfcdf44a3340t6bccb6f9";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(show);

let celsius = document.querySelector("#celsius")
celsius.addEventListener("click", currentCelsiusButton)
let Fahrenheit = document.querySelector("#Fahrenheit")
Fahrenheit.addEventListener("click", currentFahrenheitButton)

