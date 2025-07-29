import express from 'express';
import AppointmentController from '../controller/AppointmentController.js';
import authMiddleware from '../middleware/AuthMiddleware.js';

const router = express.Router();

router.use(authMiddleware);

router.get('/get', AppointmentController.get);
router.get('/get/:_id', AppointmentController.getById);
router.get('/getByDate/:_date', AppointmentController.getByDate); // ✅ Not: Çakışma olmasın diye route ismini değiştirdim

router.post('/create', AppointmentController.create);
router.put('/update/:_id', AppointmentController.update);
router.delete('/delete/:_id', AppointmentController.delete);

export default router;
