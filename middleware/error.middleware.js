const errorhandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render("index", {
        weather: null,
        error: "An unexpected error occurred. Please try again later."
    });
}

export default errorhandler;
