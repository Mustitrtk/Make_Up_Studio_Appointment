import appointmentRepository from '../../Repository/Appointment/AppointmentRepository'

class AppointmentService {

    async getAllAppointments() {
        try {
            return await appointmentRepository.getAll();
        } catch (error) {
            console.error("Service Error - getAllAppointments:", error);
            // Hatanın üst katmana (controller) fırlatılması
            throw new Error('Randevuları alırken bir hata oluştu.');
        }
    }

    async getAppointmentById(id) {
        try {
            const appointment = await appointmentRepository.getById(id);
            if (!appointment) {
                // Eğer randevu bulunamazsa, bunu bir hata olarak belirt.
                throw new Error('Belirtilen ID ile randevu bulunamadı.');
            }
            return appointment;
        } catch (error) {
            console.error(`Service Error - getAppointmentById(${id}):`, error);
            throw error; // Yakalanan hatayı veya yeni hatayı yukarı fırlat
        }
    }

    async getAppointmentsByDate(dateStr) {
        try {
            const appointments = await appointmentRepository.getByDate(dateStr);

            if (!appointments || appointments.length === 0) {
                throw new Error('Belirtilen tarihte randevu bulunamadı.');
            }

            return appointments;
        } catch (error) {
            console.error(`Service Error - getAppointmentsByDate(${dateStr}):`, error);
            throw new Error('Tarihe göre randevular getirilirken bir hata oluştu.');
        }
    }

    async createAppointment(data) {
        try {
            // İş mantığı/validasyon
            if (data.Price < 0) {
                throw new Error('Fiyat negatif olamaz!');
            }
            return await appointmentRepository.create(data);
        } catch (error) {
            console.error("Service Error - createAppointment:", error);
            // Mongoose validasyon hatası olabilir, bunu yönetebiliriz.
            if (error.name === 'ValidationError') {
                 throw new Error(`Validasyon Hatası: ${error.message}`);
            }
            throw new Error('Randevu oluşturulurken bir hata oluştu.');
        }
    }

    async updateAppointment(id, data) {
        try {
            const updatedAppointment = await appointmentRepository.update(id, data);
            if (!updatedAppointment) {
                throw new Error('Güncellenecek randevu bulunamadı.');
            }
            return updatedAppointment;
        } catch (error) {
            console.error(`Service Error - updateAppointment(${id}):`, error);
            if (error.name === 'ValidationError') {
                 throw new Error(`Validasyon Hatası: ${error.message}`);
            }
            throw new Error('Randevu güncellenirken bir hata oluştu.');
        }
    }

    async deleteAppointment(id) {
        try {
            const deletedAppointment = await appointmentRepository.delete(id);
            if (!deletedAppointment) {
                throw new Error('Silinecek randevu bulunamadı.');
            }
            return deletedAppointment;
        } catch (error) {
            console.error(`Service Error - deleteAppointment(${id}):`, error);
            throw new Error('Randevu silinirken bir hata oluştu.');
        }
    }
}

module.exports = new AppointmentService();