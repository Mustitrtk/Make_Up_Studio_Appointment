import AppointmentService from '../Service/Appointment/AppointmentService.js';

const AppointmentController = {
    get: async (req, res) => {
        try {
            const result = await AppointmentService.getAllAppointments();
            res.status(200).json({ success: true, data: result });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

    getById: async (req, res) => {
        try {
            const result = await AppointmentService.getAppointmentById(req.params._id);
            res.status(200).json({ success: true, data: result });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

    getByDate: async (req, res) => {
        try {
            const dateStr = req.query._date || null;
            const result = await AppointmentService.getAppointmentsByDate(dateStr);
            res.status(200).json({ success: true, data: result });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

    getByDateDefault: async (req, res) => {
        try {
        const dateStr = req.query._date || new Date().toISOString().slice(0, 10);
        const result = await AppointmentService.getAppointmentsByDate(dateStr);
        res.render('admin/list', { url: req.originalUrl, data:result });
        } catch (err) {
        res.status(500).json({ success: false, message: err.message });
        }
    },

    create: async (req, res) => {
        try {
            const result = await AppointmentService.createAppointment(req.body);
            res.status(200).json({ success: true, data: result });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

    update: async (req, res) => {
        try {
            await AppointmentService.updateAppointment(req.body);
            res.status(200).json({ success: true });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

    delete: async (req, res) => {
        try {
            await AppointmentService.deleteAppointment(req.params._id);
            res.status(200).json({ success: true });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    }
};

export default AppointmentController;