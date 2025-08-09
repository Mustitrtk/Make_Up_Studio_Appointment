import express from 'express';

const router = express.Router();

router.get('/', async(req,res)=>{
    res.render('main/index', { url: req.originalUrl });
})

export default router;