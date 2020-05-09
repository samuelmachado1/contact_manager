import model from './model';



class Controller{


    constructor(){}


    //SELECT 

    getContacts(){
        return model.find({});
    }

    select(req, res){
        this.getContacts()
            .then(contacts => res.status(200).json({'result': contacts}))
            .catch(err => res.status(400).json({'result': err}));
    }
    
    //SELECTONE
    
    getContactsByID(id){
        return model.find(id);
    }

    selectOne(req, res){
        const id = { _id: req.params.id}
        
        this.getContactsByID(id)
            .then(contacts => res.status(200).json({'result': contacts}))
            .catch(err => res.status(400).json({'result': err}));
    }

    //DELETE
    
    deleteByID(id){
        return model.deleteOne(id);
    }

    delete(req, res){
        const id = { _id: req.params.id}
        
        this.deleteByID(id)
            .then(contacts => res.status(200).json({'result': contacts}))
            .catch(err => res.status(400).json({'result': err}));
    }

    //UPDATE
    
    updateContact(id, data){
        return model.findOneAndUpdate(id, data);
    }

    update(req, res){
        const id = { _id: req.params.id}
        const contact = req.body;
        
        this.updateContact(id, contact)
            .then(contacts => res.status(200).json({'result': contacts}))
            .catch(err => res.status(400).json({'result': err}));
    }

    //INSERT
    
    createContact(data){
        return model.create(data);
    }

    insert(req, res){
        const contact = req.body;
        
        this.createContact(contact)
            .then(contacts => res.status(200).json({'result': contacts}))
            .catch(err => res.status(400).json({'result': err}));
    }



}

export default Controller;