class GenericRepository{
    constructor(model){
        this.model = model
    }

    getAll(){
        return this.model.find({})
    }

    getById(id){
        return this.model.findById(id)
    }

    create(data){
        return this.model.create(data)
    }

    update(data){
        return this.model.findByIdAndUpdate(data._id,data,{new:true, runValidators: true })
    }

    delete(id) {
        return this.model.findByIdAndDelete(id)
    }
}

export default GenericRepository;