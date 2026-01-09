const getWeather = (req, res) => {
    res.render('index.ejs', { weather: null, error: null });
}

export default {
    getWeather
};