import userService from '../Service/User/UserService.js';
import jwt from 'jsonwebtoken';

const UserController = {
    login: async (req, res) => {
        try {
            const user = await userService.login(req.body);

            const user_id = user._id;
            const user_role = user.Role;
            const token = jwt.sign({user_id:user_id,user_role:user_role}, process.env.JWT_SECRET,  { expiresIn: "1h" }); 

            res.cookie('token',token,{httpOnly:true});

            res.redirect('/appointment');
        } catch (error) {
            res.status(401).json({ success: false, message: error.message });
        }
    },

    logout: async (req, res) => {
        res.clearCookie('token');
        res.redirect('/');
    }
};

export default UserController;
