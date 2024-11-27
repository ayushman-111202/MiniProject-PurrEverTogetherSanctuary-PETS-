const mongoose = require('mongoose');

const url = "mongodb+srv://firstDB:ayushman111202@cluster0.d2gs7.mongodb.net/PETS-DB?retryWrites=true&w=majority&appName=Cluster0";


//asynchronous function - returns Promise
mongoose.connect(url)
    .then((result) => {
        console.log('Database Connected');
    })
    .catch((err) => {
        console.log(err);
    });

module.exports = mongoose;