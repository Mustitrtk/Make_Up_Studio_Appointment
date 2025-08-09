import appointmentRepository from '../../Repository/Appointment/AppointmentRepository.js';

class AppointmentService {
    getAllAppointments() {
        return appointmentRepository.getAll()
            .catch(error => {
                console.error("Service Error - getAllAppointments:", error);
                throw new Error('Randevuları alırken bir hata oluştu.');
            });
    }

    getAppointmentById(id) {
        return appointmentRepository.getById(id)
            .then(appointment => {
                if (!appointment) {
                    throw new Error('Belirtilen ID ile randevu bulunamadı.');
                }
                return appointment;
            })
            .catch(error => {
                console.error(`Service Error - getAppointmentById(${id}):`, error);
                throw error;
            });
    }

    getAppointmentsByDate(dateStr) {
        return appointmentRepository.getByDate(dateStr)
            .then(appointments => {
                return appointments || [];
            })
            .catch(error => {
                console.error(`Service Error - getAppointmentsByDate(${dateStr}):`, error);
                throw new Error('Tarihe göre randevular getirilirken bir hata oluştu.');
            });
    }

    createAppointment(data) {
        return new Promise((resolve, reject) => {

            const appointmentDate = new Date(data.Date);
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            if (appointmentDate < today) {
                return reject(new Error('Randevu tarihi bugünün tarihinden küçük olamaz.'));
            }

            appointmentRepository.create(data)
                .then(resolve)
                .catch(error => {
                    console.error("Service Error - createAppointment:", error);
                    if (error.name === 'ValidationError') {
                        reject(new Error(`Validasyon Hatası: ${error.message}`));
                    } else {
                        reject(new Error('Randevu oluşturulurken bir hata oluştu.'));
                    }
                });
        });
    }

    updateAppointment(id, data) {
        return new Promise((resolve, reject) => {
            const appointmentDate = new Date(data.Date);
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            if (appointmentDate < today) {
                return reject(new Error('Randevu tarihi bugünün tarihinden küçük olamaz.'));
            }

            appointmentRepository.update(id, data)
                .then(updatedAppointment => {
                    if (!updatedAppointment) {
                        return reject(new Error('Güncellenecek randevu bulunamadı.'));
                    }
                    resolve(updatedAppointment);
                })
                .catch(error => {
                    console.error(`Service Error - updateAppointment(${id}):`, error);
                    if (error.name === 'ValidationError') {
                        reject(new Error(`Validasyon Hatası: ${error.message}`));
                    } else {
                        reject(new Error('Randevu güncellenirken bir hata oluştu.'));
                    }
                });
        });
    }

    deleteAppointment(id) {
        return appointmentRepository.delete(id)
            .then(deletedAppointment => {
                if (!deletedAppointment) {
                    throw new Error('Silinecek randevu bulunamadı.');
                }
                return deletedAppointment;
            })
            .catch(error => {
                console.error(`Service Error - deleteAppointment(${id}):`, error);
                throw new Error('Randevu silinirken bir hata oluştu.');
            });
    }
}

export default new AppointmentService();
