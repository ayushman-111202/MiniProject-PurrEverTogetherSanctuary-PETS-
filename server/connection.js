require('dotenv').config();
const mongoose = require('mongoose');

const url = process.env.MONGO_URL;


//asynchronous function - returns Promise
mongoose.connect(url)
    .then((result) => {
        console.log('Database Connected');
    })
    .catch((err) => {
        console.log(err);
    });

module.exports = mongoose;