import express from 'express';
import UserController from '../controller/UserController.js';

const router = express.Router();

router.post('/TKdbV4HeVsSFZ8wheFDTA37ko/login', UserController.login);

export default router;
