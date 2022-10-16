const mongoose = require('mongoose'), Schema = mongoose.Schema;
const User = require('../models/users.model.js');

const qualificationSchema = new mongoose.Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    company: {type: String, required: 'name is required', trim: true},
    title: {type: String, required: 'title is required', trim: true},
    description: {type: String},
    location: {type: String, trim: true},
    startdate: {type: Date},
    enddate: {type: Date}
});

const model = mongoose.model('Qualification', qualificationSchema);

module.exports = model;