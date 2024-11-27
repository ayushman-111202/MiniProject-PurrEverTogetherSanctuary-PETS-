const { Schema, model } = require('../connection');

const mySchema = new Schema({
    name : String,
    email : { type : String, unique : true },
    password : { type : String, required : true },
    city : { type : String, default : 'Unknown' },
    joinedAt : { type : Date, default : Date.now }
});

module.exports = model('users', mySchema);