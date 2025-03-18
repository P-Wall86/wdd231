const apiKey = "f6b32a9c3ca6b5ba89d98b158344bb0f";
const city = "Posadas, AR";
const currentWeatherDiv = document.getElementById("current-weather");
const weatherForecastDiv = document.getElementById("weather-forecast");

//FETCHING
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Current Weather Data:", data);
        displayCurrentWeather(data);
    })
    .catch(error => {
        console.error("Error fetching current weather:", error);
        currentWeatherDiv.innerHTML = `<p>Failed to load current weather. Please try again later.</p>`;
    });


fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Weather Forecast Data:", data);
        displayWeatherForecast(data);
    })
    .catch(error => {
        console.error("Error fetching weather forecast:", error);
        weatherForecastDiv.innerHTML = `<p>Failed to load weather forecast. Please try again later.</p>`;
    });


//DISPLAYING
function displayCurrentWeather(data) {
    if (!data || !data.weather || !data.main || !data.sys) {
        console.error("Invalid current weather data:", data);
        currentWeatherDiv.innerHTML = `<p>Invalid weather data received.</p>`;
        return;
    }

    const main = data.main;
    const sys = data.sys;


    const sunriseTime = new Date(sys.sunrise * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const sunsetTime = new Date(sys.sunset * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    const weatherDescriptions = data.weather
        .map(event => event.description.charAt(0).toUpperCase() + event.description.slice(1))
        .join(", ");

    currentWeatherDiv.innerHTML = ""

    const customSVG = `<img src="images/weather.svg" alt="Weather Icon" width="100" height="100">`;
    currentWeatherDiv.innerHTML += customSVG;

    const weatherDetails = document.createElement("div");
    weatherDetails.innerHTML = `
        <p><strong>${main.temp.toFixed(0)}°</strong> C</p>
        <p>${weatherDescriptions}</p>
        <p><strong>High</strong>: ${main.temp_max.toFixed(0)}°C</p>
        <p><strong>Low</strong>: ${main.temp_min.toFixed(0)}°C</p>
        <p><strong>Humidity</strong>: ${main.humidity}%</p>
        <p><strong>Sunrise</strong>: ${sunriseTime}</p>
        <p><strong>Sunset</strong>: ${sunsetTime}</p>
    `;
    currentWeatherDiv.appendChild(weatherDetails);
}

function displayWeatherForecast(data) {
    if (!data || !data.list) {
        console.error("Invalid forecast data:", data);
        weatherForecastDiv.innerHTML = `<p>Invalid forecast data received.</p>`;
        return;
    }

    const forecasts = data.list;
    let html = "";

    const today = new Date().toLocaleDateString();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowDate = tomorrow.toLocaleDateString();
    const dayAfterTomorrow = new Date();
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);
    const dayAfterTomorrowDate = dayAfterTomorrow.toLocaleDateString();

    const filteredForecasts = forecasts.filter(forecast => {
        const forecastDate = new Date(forecast.dt_txt).toLocaleDateString();
        return forecastDate === today || forecastDate === tomorrowDate || forecastDate === dayAfterTomorrowDate;
    });

    const groupedForecasts = {};
    filteredForecasts.forEach(forecast => {
        const forecastDate = new Date(forecast.dt_txt).toLocaleDateString();
        if (!groupedForecasts[forecastDate]) {
            groupedForecasts[forecastDate] = [];
        }
        groupedForecasts[forecastDate].push(forecast);
    });

    for (const date in groupedForecasts) {
        const forecastsForDate = groupedForecasts[date];
        const main = forecastsForDate[0].main;

        const dayName = new Date(forecastsForDate[0].dt_txt).toLocaleDateString("en-US", { weekday: "long" });

        html += `
            <div class="forecast-item">
                <p>${dayName}: <strong>${main.temp.toFixed(0)}°C</strong></p>
            </div>
        `;
    }

    weatherForecastDiv.innerHTML = html;
}