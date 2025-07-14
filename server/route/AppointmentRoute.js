import express from 'express';
import AppointmentController from '../controller/AppointmentController.js';

const router = express.Router();

router.get('/get', AppointmentController.get);
router.get('/get/:_id', AppointmentController.getById);
router.get('/getByDate/:_date', AppointmentController.getByDate); // ✅ Not: Çakışma olmasın diye route ismini değiştirdim

router.post('/create', AppointmentController.create);
router.put('/update/:_id', AppointmentController.update);
router.delete('/delete/:_id', AppointmentController.delete);

export default router;
