import express from 'express';
import dotenv from 'dotenv';

const app = express();
const port = 3000;

dotenv.config();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Weather App is running');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
    