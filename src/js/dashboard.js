import { getAirPollutionData, getGeocodingData } from "./data";
import { convertUnixToTime } from "./globals";

// Today's highlights panels
const HIGHLIGHTS_ELEMENTS = {
    "wind_status": document.getElementById("wind-status"),
    "humidity": document.getElementById("humidity"),
    "sunrise": document.getElementById("sunrise"),
    "sunset": document.getElementById("sunset"),
    "visibility": document.getElementById("visibility"),
    "air_quality": document.getElementById("air-quality")
}

// Update today's highlights panels
export const updateHighlights = async (data) => {
    HIGHLIGHTS_ELEMENTS["wind_status"].innerHTML = `${data.wind.speed} km/h`;
    HIGHLIGHTS_ELEMENTS["humidity"].innerHTML = `${data.main.humidity}%`;
    HIGHLIGHTS_ELEMENTS["sunrise"].innerHTML = `${convertUnixToTime(data.sys.sunrise, data.timezone)}`;
    HIGHLIGHTS_ELEMENTS["sunset"].innerHTML = `${convertUnixToTime(data.sys.sunset, data.timezone)}`;
    HIGHLIGHTS_ELEMENTS["visibility"].innerHTML = `${(data.visibility / 1000).toFixed(1)} km`;
    await setAirQaulity(data.name);
}

// Update air quality
const setAirQaulity = async (city) => {

    const geocodingData = await getGeocodingData(city);

    let lat = 0;
    let lon = 0;

    geocodingData.forEach(item => {
        lat = item.lat;
        lon = item.lon;
    });

    const airPollutionData = await getAirPollutionData(lat, lon);
    let airPollutionText = "";

    switch (airPollutionData.list[0].main.aqi) {
        case 1:
            airPollutionText = "Good";
            break;
        case 2:
            airPollutionText = "Fair";
            break;
        case 3:
            airPollutionText = "Moderate";
            break;
        case 4:
            airPollutionText = "Poor";
            break;
        case 5:
            airPollutionText = "Very Poor";
            break;
        default:
            break;
    }
        
    HIGHLIGHTS_ELEMENTS["air_quality"].innerHTML = airPollutionText;
}