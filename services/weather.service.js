import axios from "axios";

const weatherService = {};
const getWeatherByCity = async (city) => {
  const API_KEY = process.env.OPENWEATHER_API_KEY;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    return {
      city: data.name,
      country: data.sys.country,
      temp: data.main.temp,
      feelsLike: data.main.feels_like,
      humidity: data.main.humidity,
      condition: data.weather[0].main,
      icon: data.weather[0].icon,
      wind: data.wind.speed
    };
  } catch (error) {
    const err = new Error("City not found");
    err.status = 404;
    throw err;
  }
};


export default {
  getWeatherByCity
};
