import GenericRepository from '../GenericRepository.js';
import Appointment from '../../model/Appointments.js';

class AppointmentRepository extends GenericRepository {
    constructor() {
        super(Appointment);
    }
    
    getByDate(dateStr) {
        let date;
        if (!dateStr) {
            date = new Date();
        } else {
            date = new Date(dateStr);
        }

        const startOfDay = new Date(date);
        startOfDay.setHours(0, 0, 0, 0);

        const endOfDay = new Date(date);
        endOfDay.setHours(23, 59, 59, 999);

        return this.model.find({
            DateTime: { $gte: startOfDay, $lte: endOfDay }
        }).sort({ Time: 1 });
    }
}

export default new AppointmentRepository();