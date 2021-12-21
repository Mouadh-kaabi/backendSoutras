const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;


var UserSchema = new Schema({
    'username' : {type: String, required: false},
    'firstname' : {type: String, required: false},
    'lastname' : {type: String, required: false},
    'email' : {type: String, required: true, unique: true},
    'password' : {type: String, required: true},
    'avatar' : {type: String, required: false},
    'createdAt' : {type : Date, default : Date.now() }
})

UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', UserSchema);