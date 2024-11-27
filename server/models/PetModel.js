const { Schema, model } = require('../connection');

const mySchema = new Schema({
    name : String,
    breed : String,
    color : String,
    age : Number,
    addedAt : { type : Date, default : Date.now }

});

module.exports = model('pets', mySchema);