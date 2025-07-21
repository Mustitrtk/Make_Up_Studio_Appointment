import userService from '../Service/User/UserService.js';

const UserController = {
    login: async (req, res) => {
        try {
            const user = await userService.login(req.body);
            res.status(200).json({ success: true, data: user });
        } catch (error) {
            res.status(401).json({ success: false, message: error.message });
        }
    }
};

export default UserController;
