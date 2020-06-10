import API from "./Settings.js"

getEateryData().then(
    () => {
        eateryList()
    }
)


const weatherApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Nashville&units=imperial&appid=${API.weatherKey}`

fetchWeatherData(weatherApiUrl)
    .then(() => {weatherList(fiveDayForecast)} })
