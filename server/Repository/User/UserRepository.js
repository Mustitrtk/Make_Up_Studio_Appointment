class UserRepository{

    findByUsername(username) {
        return this.model.findOne({ Username: username });
    }
}

export default new UserRepository();