import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routers'

// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const routes = require('./routers')

const app = express();
const PORT = 3000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/contacts_db',{
    useMongoClient: true
});

// body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) =>{
    res.send(`Node is running on the port ${PORT}`);
});

app.listen(PORT, () =>{
    console.log(`Your server is running on the port ${PORT}`);
});




