import '../scss/main.scss';

import { locationInputField, searchLocationBtn } from './globals';
import { getCurrentWeatherData } from './data';

const getLocation = async (city) => {
    let d_weather = await getCurrentWeatherData(city);

    if (!d_weather) return;

    locationInputField.value = "";

    console.log(d_weather);
}

const run = () => {
    searchLocationBtn.addEventListener('click', async (e) => {
        await getLocation(locationInputField.value);
    });
    
    locationInputField.addEventListener('keypress', async (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
    
            await getLocation(locationInputField.value);
        }
    });
}

run();