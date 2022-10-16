const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: {type: String, required: 'name is required', trim: true},
    email: {type: String, required: 'email is required', unique: true, trim: true},
    password: {type: String, required: 'password is required', select: false, trim: true},
    location: {type: String, trim: true},
    about: {type: String, default: ""},
    field: {type: String, default: ""},
    picture: {type: String, default: ""},
    header: {type: String, default: ""}
});

const model = mongoose.model('Company', companySchema);

module.exports = model;