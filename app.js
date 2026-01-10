import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import morgan from 'morgan';
import { limiter } from './middleware/ratelimit.middleware.js';
import errorhandler from './middleware/error.middleware.js';
import dotenv from 'dotenv';

import weatherRoutes from './routes/weather.routes.js';

const app = express();
const port = 3000;

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(morgan('dev'));

app.use(errorhandler);
app.use(limiter);

app.use('/', weatherRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
