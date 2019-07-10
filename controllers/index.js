import { contactsSchema } from '../schema';
import { addressSchema } from '../schema/address_scehma';
import mongoose from 'mongoose'

const Contact = mongoose.model('Contact', contactsSchema, 'contacts');
const Address = mongoose.model('Address', addressSchema, 'contacts');

const addNewAddress =  function(req, res, next){
    console.log("Got into address")
    let newAddress = new Address(req.body);
    newAddress.save((err, data) => {
        if (err){
            next(err);
        }
        console.log("returning data")
        // return (data);
        // next();
    });
}


export const addNewContact = ((req, res, next)=>{
    console,log("Inside add new contacts")
    let newContact = new Contact(req.body);
    // let newAdress = new Address(req.body)
    newContact.save((err, data) => {
        if (err){
            next(err);
        }
        console.log("calling next")
    }); 
    next();
}, addNewAddress)


export const addNewContacts = (req, res, next) => {
    let newContact = new Contact(req.body);
    // let newAdress = new Address(req.body)
    newContact.save((err, data) => {
        if (err){
            next(err);
        }
        // res.json(data);
        next();
        })
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