import express from 'express';
import UserController from '../controller/UserController.js';

const router = express.Router();

router.get('/TKdbV4HeVsSFZ8wheFDTA37ko/login', async(req,res)=>{
    res.render('admin/login')
});

router.post('/TKdbV4HeVsSFZ8wheFDTA37ko/login', UserController.login);

export default router;
