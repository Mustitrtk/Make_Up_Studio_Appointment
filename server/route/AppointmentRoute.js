import express from 'express'
import AppointmentController from '../controller/AppointmentController'

const router = express.Router();

router.get('/get', AppointmentController.get);
router.get('/get/:_id', AppointmentController.getById);
router.get('/get/:_date', AppointmentController.getByDate); 

router.post('/create', AppointmentController.create);
router.put('/update/:_id', AppointmentController.update);
router.delete('/delete/:_id', AppointmentController.delete);

module.exports = router;
