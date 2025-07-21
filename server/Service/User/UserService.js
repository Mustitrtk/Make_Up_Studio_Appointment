import userRepository from '../../Repository/User/UserRepository.js';
import argon2 from 'argon2';

class UserService {
    async login({ Username, Password }) {
        const user = await userRepository.findByUsername(Username);
        if (!user) {
            throw new Error('Kullanıcı bulunamadı veya şifre yanlış.');
        }

        const isValid = await argon2.verify(user.Password, Password);
        if (!isValid) {
            throw new Error('Kullanıcı bulunamadı veya şifre yanlış.');
        }

        return user;
    }
}

export default new UserService();
