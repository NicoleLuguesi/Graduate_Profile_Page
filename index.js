require('dotenv/config')
const express = require('express');
const app = express();
const Joi = require('joi');
const mongoose = require('mongoose');
const graduates = require('./routes/graduates'); // routes
require('cors'); // to allow cross-domain requests
//const bodyParser = require('body-parser');

app.use(express.json());
//app.use(bodyParser.json()); //  automatically parses the request to JSON


app.use(express.static('public'));
app.use(express.urlencoded({ extended: false })) // how intpreted data 

app.use('/api/graduates', graduates);
//app.use(bodyParser.urlencoded({extended: false})); // don't need body-parser and express 

mongoose.connect(process.env.DATA_BASE, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Can not connect to MongoDB ...'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

