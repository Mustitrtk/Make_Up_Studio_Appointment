import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import db from './server/config/database.js';

import appointmentRoute from './server/route/AppointmentRoute.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/appointment', appointmentRoute);

const startServer = async () => {
    await db();
    app.listen(PORT, () => {
        console.log(`🚀 Server ${PORT} portunda çalışıyor`);
    });
};

startServer();
