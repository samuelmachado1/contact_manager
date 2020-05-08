import model from './model';



class Controller{


    constructor(){}

    getContacts(){
        return model.find({});
    }

    select(req, res){
        this.getContacts()
        .then(contacts => res.status(200).json({'result': contacts}))
        .catch(err => res.status(400).json({'result': err}));
    }
}

export default Controller;