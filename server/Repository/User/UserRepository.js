import User from '../../model/Users.js';

class UserRepository {
    constructor(model) {
        this.model = model;  
    }

    findByUsername(username) {
        return this.model.findOne({ Username: username });
    }
}

export default new UserRepository(User);