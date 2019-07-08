import mongoose from 'mongoose';

const Schema= mongoose.Schema;

export const contactsSchema = new Schema ({
    firstName:{
        type: String,
        required: 'Enter First Name'
    },

    lastName:{
        type: String
        // required: 'Enter Last Name'
    },

    email:{
        type: String
    },

    phoneNumber:{
        type: Number,
        required: "Enter phone number"
    },

    company:{
        type: String
    },

    created_date:{
        type : Date,
        default: Date.now
    }
});