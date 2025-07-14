import 'dotenv/config'; // bu satır .env dosyasını otomatik yükler
import express from 'express'
import appointmentRoute from './server/route/AppointmentRoute.js'

const app = express()

const PORT = 3000 | process.env.PORT

app.use('/appointment',appointmentRoute)

app.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`)
})