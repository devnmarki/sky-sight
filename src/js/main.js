import '../scss/main.scss';

import { locationInputField, searchLocationBtn } from './globals';
import { getCurrentWeatherData } from './data';
import { setCurrentWeatherElements } from './overview';

// Get current weather data from given location 
const getLocation = async (city) => {
    let d_weather = await getCurrentWeatherData(city);
    
    if (d_weather) {
        console.log(d_weather);
        await setCurrentWeatherElements(d_weather);
    } else {
        alert("Please enter valid location.");
    }

    locationInputField.value = "";
} 

// Application start
const run = async () => {
    await getLocation("Berlin");

    // Get location data on search button click
    searchLocationBtn.addEventListener('click', async (e) => {
        await getLocation(locationInputField.value);
    });
    
    // Get location data on enter ket press
    locationInputField.addEventListener('keypress', async (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
    
            await getLocation(locationInputField.value);
        }
    });
}

await run();