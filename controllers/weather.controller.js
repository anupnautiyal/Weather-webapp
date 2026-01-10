import weatherService from "../services/weather.service.js";

const handleWeatherRequest = async (req, res) => {
const city = req.query.city;
  if (!city) {
    return res.render("index.ejs", {
      weather: null,
      error: null
    });
  }
  try {
    const weatherData = await weatherService.getWeatherByCity(city);

    res.render("index.ejs", {
      weather: weatherData,
      error: null
    });
  } catch (error) {
    next(error);
  }
};

export default {
  handleWeatherRequest
};

