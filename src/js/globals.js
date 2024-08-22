export const API_KEY = "942843fc2c829a95df8ea3d0ac14bea0";

export const CURRENT_WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";

// Input location form elements
export const searchLocationBtn = document.getElementById("search-location-btn");
export const locationInputField = document.getElementById("location-input-field");

// Overview section elements map
export const OVERVIEW_ELEMENTS = {
    "city_name":                document.getElementById("city-name"),
    "current_day_text":         document.getElementById("day-text"),
    "time_text":                document.getElementById("time-text"),
    "weather_image":            document.getElementById("weather-image"),
    "temp_text":                document.getElementById("temp-text"),
    "weather_desc_text":        document.getElementById("weather-description-text")
};

// Convert comlicated delta time number(unix) to actual hours and minutes(time)
export const convertUnixToTime = (unixTimestamp, timezoneOffset) => {
    const date = new Date((unixTimestamp + timezoneOffset / 2) * 1000);

    return date.toLocaleTimeString("en-US", {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
}

// Set source of weather icon to icon from weather data
export const setWeatherIcon = (image, data) => {
    image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
}

// Convert kelvins from weather data to celsius
export const kelvinToCelsius = (temp) => temp - 273.15;