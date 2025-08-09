import mongoose from 'mongoose';
import SetAppointment from "../middleware/SetAppointment.js"

const AppointmentSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:[true, 'İsim alanı zorunludur.']
    },
    Surname:{
        type:String,
        required:[true, 'Soyad alanı zorunludur.']
    },
    Description:{
        type:String,
        required:[true, 'Açıklama alanı zorunludur.']
    },
    Price:{
        type:Number,
    },
    DateTime:{
        type:Date,
        required:[true, 'Tarih-Saat alanı zorunludur.']
    }
})

// ✨ Middleware'i uygula
SetAppointment(AppointmentSchema);

const Appointment = mongoose.model('Appointment', AppointmentSchema);

export default Appointment;