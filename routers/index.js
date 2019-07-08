import {
    addNewContact,
    updateContact,
    getAllContacts,
    getContactById,
} from '../controllers'


const routes = (app) => {
    app.route('/contact')
    .get((req, res, next) => {
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request Type: ${req.method}`);
        console.log(`Request: ${req}`);
        next();
    
    }, getAllContacts)

    .post(addNewContact);

    app.route('/contact/:contactId')

    .get(getContactById)

    .put(updateContact);

}

export default routes;