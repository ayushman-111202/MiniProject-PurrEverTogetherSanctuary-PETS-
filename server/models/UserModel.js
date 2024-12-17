const { Schema, model } = require('../connection');

const mySchema = new Schema({
    firstName : { type : String, required : true },
    lastName : { type : String, required : true },
    contact : { type : Number, required : true },
    email : { type : String, unique : true },
    password : { type : String, required : true },
    confirmPassword : { type : String, required : true },
    city : { type : String, default : 'Unknown' },
    joinedAt : { type : Date, default : Date.now }
    
});

module.exports = model('users', mySchema);