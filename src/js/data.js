import { API_KEY } from "./globals";

// Fetch data of current day weather (current weather data)
export const getCurrentWeatherData = async (city) => {

    try {

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
 
        if (!response.ok) {
            throw new Error("Failed to fetch weather data!");
        }

        return response.json();

    } catch(e) {
        console.error(e);
    }

}

// Fetch data from Geocoding API
export const getGeocodingData = async (city) => {

    try {

        const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`);

        if (!response.ok) {
            throw new Error("Failed to fetch geocoding data!");
        }

        return response.json();

    } catch(e) {
        console.error(e);
    }

}

// Fetch data from Air Pollution API
export const getAirPollutionData = async (lat, lon) => {

    try {

        const response = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`);

        if (!response.ok) {
            throw new Error("Failed to fetch air pollution data");
        }

        return response.json();

    } catch(e) {
        console.error(e);
    }

}  