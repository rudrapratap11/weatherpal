import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

async function getWeather(city: string): Promise<void> {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    });

    const { name, main, weather } = response.data;

    console.log(`\nWeather in ${name}:`);
    console.log(`Temperature: ${main.temp} °C`);
    console.log(`Condition: ${weather[0].main} - ${weather[0].description}\n`);
  } catch (error: any) {
    if (error.response?.status === 404) {
      console.log('City not found. Please try again.');
    } else {
      console.error('Error fetching weather:', error.message);
    }
  }
}

// Get city from command-line argument
const city = process.argv[2];
if (!city) {
  console.log('Please provide a city name.');
} else {
  getWeather(city);
}
