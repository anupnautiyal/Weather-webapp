import weatherService from "../services/weather.service.js";

const handleWeatherRequest = async (req, res) => {
const city = req.query.city;
  if (!city) {
    return res.render("index", {
      weather: null,
      error: null
    });
  }
  try {
    const weatherData = await weatherService.getWeatherByCity(city);

    res.render("index", {
      weather: weatherData,
      error: null
    });
  } catch (error) {
    res.render("index", {
      weather: null,
      error: "City not found. Please try again."
    });
  }
};

export default {
  handleWeatherRequest
};
