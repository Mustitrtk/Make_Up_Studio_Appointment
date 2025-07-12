import 'dotenv/config'; // bu satır .env dosyasını otomatik yükler
import express from 'express'

const app = express()

const PORT = 3000 | process.env.PORT

app.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`)
})