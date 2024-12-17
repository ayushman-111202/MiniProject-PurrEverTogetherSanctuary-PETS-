const { Schema, model } = require('../connection');

const mySchema = new Schema({
    name : String,
    type : String,
    breed : String,
    color : String,
    age : Number,
    image : String,
    addedAt : { type : Date, default : Date.now }

});

module.exports = model('pets', mySchema);