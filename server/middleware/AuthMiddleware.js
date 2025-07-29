import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ success: false, message: 'Erişim reddedildi. Lütfen giriş yapın.' });
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (decoded.user_role !== 'admin') {
            return res.status(403).json({ success: false, message: 'Bu işlemi yapmak için yetkiniz bulunmamaktadır.' });
        }

        req.user = {
            id: decoded.user_id,
            role: decoded.user_role
        };

        next();

    } catch (error) {

        return res.status(401).json({ success: false, message: 'Geçersiz veya süresi dolmuş token. Lütfen tekrar giriş yapın.' });
    }
};

export default authMiddleware;