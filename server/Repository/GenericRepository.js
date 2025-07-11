class GenericRepository{
    constructor(model){
        this.model = model
    }

    getAll(){
        return new Promise((resolve,rejecet)=>{
            this.model.find({})
                .then(data => resolve(data))
                .catch(err =>rejecet(err))
        })
    }

    getById(id){
        return new Promise((resolve,rejecet)=>{
            this.model.findById(id)
                .then(data => resolve(data))
                .catch(err => rejecet(err))
        })
    }

    create(data){
        return new Promise((resolve,reject)=>{
            this.model.create(data)
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }

    update(id,data){
        return new Promise((resolve,reject)=>{
            this.model.findByIdAndUpdate(id,data,{new:true, runValidators: true })
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            this.model.findByIdAndDelete(id)
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
}

module.exports = GenericRepository;