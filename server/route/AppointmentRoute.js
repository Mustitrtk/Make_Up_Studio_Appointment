import express from 'express';
import AppointmentController from '../controller/AppointmentController.js';
import authMiddleware from '../middleware/AuthMiddleware.js';

const router = express.Router();

router.use(authMiddleware);

router.get('/', (req, res) => {
  res.render('admin/index', { url: req.originalUrl });
});

router.get('/list', AppointmentController.getByDateDefault);

router.get('/help', (req, res) => {
  res.render('admin/help-center', { url: req.originalUrl });
});

router.get('/get', AppointmentController.get);  
router.get('/get/:_id', AppointmentController.getById);  
router.get('/getByDate', AppointmentController.getByDate);  

router.post('/create', AppointmentController.create);
router.put('/update/:_id', AppointmentController.update);
router.delete('/delete/:_id', AppointmentController.delete);

export default router;
