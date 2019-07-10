import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const addressSchema = new Schema ({
    houseNumber:{
        type: String,
        // required: "Enter house number"
    },

    locality:{
        type: String,
        // required: "Enter  locality"
    },

    city:{
        type: String,
        required: "Enter  city"
    },

    zipCode:{
        type: Number,
        required: "Enter  zipCode"
    }


});