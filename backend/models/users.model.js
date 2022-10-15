const mongoose = require('mongoose');

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
    education: [{
        school: {type: String, required: 'school is required', trim: true},
        degree: {type: String, required: 'degree is required', trim: true},
        field: {type: String, trim: true},
        grade: {type: Number, trim: true},
        startdate: {type: Date},
        enddate: {type: Date},
        gratuated : {type: String, enum: ['yes', 'no'], default:"yes", trim: true}
    }],
    languages: {type: Array},
    skills: {type: Array},
    experience: [{
        company: {type: String, required: 'company name is required', trim: true},
        title: {type: String, required: 'title is required', trim: true},
        employement_type: {type: String, trim: true},
        description: {type: String},
        location: {type: String, trim: true},
        startdate: {type: Date},
        enddate: {type: Date},
        still_working : {type: String, enum: ['yes', 'no'], default:"no", trim: true}
    }],
    qualifications: [{
        company: {type: String, required: 'name is required', trim: true},
        title: {type: String, required: 'title is required', trim: true},
        description: {type: String},
        location: {type: String, trim: true},
        startdate: {type: Date},
        enddate: {type: Date}
    }],
});

const model = mongoose.model('User', userSchema);

module.exports = model;