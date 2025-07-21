import GenericRepository from "../GenericRepository";
import User from '../../model/Users';

class UserRepository extends GenericRepository{
    constructor(){
        super(User);
    }

    findByUsername(username) {
        return this.model.findOne({ Username: username });
    }
}

export default new UserRepository();