import express from 'express';
import dotenv from 'dotenv';
import weatherRoutes from './routes/weather.routes.js';

const app = express();
const port = 3000;

dotenv.config();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/', weatherRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
