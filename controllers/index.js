import { contactsSchema } from '../schema';
import mongoose from 'mongoose'

const Contact = mongoose.model('Contact', contactsSchema);

export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);

    newContact.save((err, data) => {
        if (err){
            res.send(err);
        }
        res.json(data);
     } );
}

export const updateContact = (req, res) => {
    Contact.findOneAndUpdate({_id: req.params.contactId}, (err, data) => {
        if (err){
            res.send(err);
        }
        res.json(data);

    });
}


export const getAllContacts = (req, res) =>{
    Contact.find({}, (err, data) =>{
        if (err){
            res.send(err);
        }
        res.send(data);
    });
}

export const getContactById = (req,res) =>{
    Contact.findById(req.params.contactId, (err, data) => {
        if(err){
            res.send(err);
        }
        res.json(data);
    });
}

export const deleteContactById = (req, res) => {
    Contact.remove({_id: req.params.contactId}, (err, data) => {
        if (err){
            res.send(err);
        }
        res.json({message: ` ${req.params.contactId} is successflly deleted`});
    });
}