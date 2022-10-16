const mongoose = require('mongoose'), Schema = mongoose.Schema;
const User = require('../models/users.model');

const educationSchema = new mongoose.Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    school: {type: String, required: 'school is required', trim: true},
    degree: {type: String, required: 'degree is required', trim: true},
    field: {type: String, trim: true},
    grade: {type: Number, trim: true},
    startdate: {type: Date},
    enddate: {type: Date},
    gratuated : {type: String, enum: ['yes', 'no'], default:"yes", trim: true}
});

const model = mongoose.model('Education', educationSchema);

module.exports = model;