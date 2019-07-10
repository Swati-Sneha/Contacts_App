import {
    addNewContact,
    updateContact,
    getAllContacts,
    getContactById,
} from '../controllers'

// async function addDetails=(){
    
//     addNewAddress;
//     // await addNewContact
//     // await addNewAddress
//     // const newAddress = addNewAddress;
//     // return (newContact, newAddress)
//     // return newContact;
// }


const routes = (app) => {
    app.route('/contact')
    .get((req, res, next) => {
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request Type: ${req.method}`);
        console.log(`Request: ${req}`);
        next();
    
    }, getAllContacts)

    // .post(addDetails),

    .post(addNewContact)

    app.route('/contact/:contactId')

    .get(getContactById)

    .put(updateContact)

}

export default routes;