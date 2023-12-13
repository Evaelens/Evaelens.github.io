function searchCity(response) {
    console.log(response)
    let city = document.querySelector("#city")
    city.innerHTML = response.data.city

    let temperature = document.querySelector("#temperature")
    let apiTemperature = Math.round(response.data.temperature.current)
    temperature.innerHTML = apiTemperature

    let humidity = document.querySelector("#humidity")
    let apiHumidity = Math.round(response.data.temperature.humidity)
    humidity.innerHTML = `${apiHumidity}%`

    let wind = document.querySelector("#wind")
    let apiWind = response.data.wind.speed
    wind.innerHTML = `${apiWind}km/h`

    let condition = document.querySelector("#condition")
    condition.innerHTML = response.data.condition.description
    
    let time = new Date(response.data.time * 1000)
    let date = document.querySelector("#date")
    date.innerHTML = apiDate(time)

    let icon = `<img class="icon" src="${response.data.condition.icon_url}" alt="">`
    let weatherIcon = document.querySelector("#weather-icon")
    weatherIcon.innerHTML = icon
}

function apiDate(time) {
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = days[time.getDay()]
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    if (hours < 10) {
        hours = `0${hours}`
    }

    return `${day} ${hours}:${minutes}`
}

function apiSearch(city) {
    let apiKey = "7oc0fb947c5cfcdf44a3340t6bccb6f9"
    let ApiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
    axios.get(ApiUrl).then(searchCity)
}

function form(event) {
    event.preventDefault()
    let search = document.querySelector("#search-bar")

    apiSearch(search.value)
}

function displayForecast() {
    let weatherForecast = document.querySelector("#weather-forecast")

    let days = ["Tue", "Wed", "Thu", "Fri", "Sat"]
    let forecastHtml = "";
    days.forEach(function(day) {
        forecastHtml += `<div class="forecast-1">
    <ul>
        <li>
            ${day}
        </li>
        <li>
            <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png" alt="">
        </li>
        <li>
            18° <span class="temp-min">13°</span>
        </li>
    </ul>
    </div>
    `;
    })

    weatherForecast.innerHTML = forecastHtml
}

let searchInput = document.querySelector("#search-input")
searchInput.addEventListener("submit", form)

apiSearch("Nigeria")

displayForecast()

