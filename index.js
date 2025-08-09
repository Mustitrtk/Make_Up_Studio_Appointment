import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import db from './server/config/database.js';

import MainRoute from './server/route/MainRoute.js'
import appointmentRoute from './server/route/AppointmentRoute.js';
import userRoute from './server/route/UserRoute.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Use parser for post size
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser()); // Add cookie-parser middleware
app.use(cors());

app.use(express.static('public'));
app.set('view engine','ejs');

app.use('/',MainRoute)
app.use('/appointment', appointmentRoute);
app.use('/admin', userRoute);

const startServer = async () => {
    await db();
    app.listen(PORT, () => {
        console.log(`🚀 Server ${PORT} portunda çalışıyor`);
    });
};

startServer();
