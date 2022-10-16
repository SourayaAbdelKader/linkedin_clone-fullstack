const mongoose = require('mongoose'), Schema = mongoose.Schema;
const User = require('../models/users.model.js');

const experienceSchema = new mongoose.Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    company: {type: String, required: 'company name is required', trim: true},
    title: {type: String, required: 'title is required', trim: true},
    employement_type: {type: String, trim: true},
    description: {type: String},
    location: {type: String, trim: true},
    startdate: {type: Date},
    enddate: {type: Date},
    still_working : {type: String, enum: ['yes', 'no'], default:"no", trim: true}
});

const model = mongoose.model('Education', experienceSchema);

module.exports = model;