const mongoose = require('mongoose');
const Education = require('../models/education.model.js');

const userSchema = new mongoose.Schema({
    name: {type: String, required: 'name is required', trim: true},
    email: {type: String, required: 'email is required', unique: true, trim: true},
    phone: {type: String, unique: true, trim: true},
    password: {type: String, required: 'password is required', select: false, trim: true},
    gender: {type: String, enum: ['Male', 'Female', 'Other'], trim: true},
    location: {type: String, trim: true},
    birthdate: {type: Date},
    about: {type: String, default: ""},
    picture: {type: String, default: ""},
    header: {type: String, default: ""},
});

const model = mongoose.model('User', userSchema);

module.exports = model;