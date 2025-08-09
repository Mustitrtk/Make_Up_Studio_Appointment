import GenericRepository from '../GenericRepository.js';
import Appointment from '../../model/Appointments.js'

class AppointmentRepository extends GenericRepository {
    constructor() {
        super(Appointment);
    }
    
    getByDate(dateStr) {
        return new Promise((resolve, reject) => {
            const date = new Date(dateStr);

            const startOfDay = new Date(date);
            startOfDay.setHours(0, 0, 0, 0);

            const endOfDay = new Date(date);
            endOfDay.setHours(23, 59, 59, 999);

            this.model.find({
                DateTime: { $gte: startOfDay, $lte: endOfDay }
            })
            .sort({ Time: 1 })
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }
}

export default new AppointmentRepository();