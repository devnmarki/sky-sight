import { kelvinToCelsius, OVERVIEW_ELEMENTS, setWeatherIcon } from "./globals";

// Set all current weather overview elements
export const setCurrentWeatherElements = (data) => {
    updateCityName(data);
    updateCurrentTime(data);
    updateWeatherStats(data);
    updateWeatherDesc(data);
}

const updateCityName = (data) => {
    OVERVIEW_ELEMENTS["city_name"].innerHTML = `${data.name}, ${data.sys.country}`;
}

const updateCurrentTime = (data) => {
    OVERVIEW_ELEMENTS["current_day_text"].innerHTML = `${new Date().toLocaleDateString('en-us', {weekday:"long"})}`;
    OVERVIEW_ELEMENTS["time_text"].innerHTML = `${new Date().getHours()}:00`;
}

const updateWeatherStats = (data) => {
    setWeatherIcon(OVERVIEW_ELEMENTS["weather_image"], data);
    OVERVIEW_ELEMENTS["temp_text"].innerHTML = `${kelvinToCelsius(data.main.temp).toFixed(0)}°C`
}

const updateWeatherDesc = (data) => {
    let weatherDesc = data.weather[0].description;

    let words = weatherDesc.split(" ");

    // Capitalize the first letter of each word
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    weatherDesc = words.join(" ");

    OVERVIEW_ELEMENTS["weather_desc_text"].innerHTML = `${weatherDesc}`;
}