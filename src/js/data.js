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