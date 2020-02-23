const express = require('express');
const fetch = require('node-fetch');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express();
const router = express.Router();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})



// fetch('https://localhost:3000/api/graduates', {
//     method: 'POST',
//     headers: {
//         'Content-Type':'application/json'
//     },
//     body: JSON.stringify({
//         name: 'Stephanie Rodriguez',
//         email: 'Stephanie0225@yahoo.com',
//         bio: "I graduated I love this place",
//         dateOfGraduation: "04/22/2020"
//     })
// })  .then(res => {
//         return res.json()
// })
// .then(data => console.log(data))
// .catch(error => console.error('ERROR!', error))


module.exports = router;
