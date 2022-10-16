const Company = require('../models/company.model.js');
const mongoose = require('mongoose'), Schema = mongoose.Schema;

const jobSchema = new mongoose.Schema({
    company : { type: Schema.Types.ObjectId, ref: 'Company' },
    title: {type: String, required: 'name is required', trim: true},
    location: {type: String, trim: true},
    jobtype: {type: String, trim: true},
    description: {type: String, trim: true},
    startdate: {type: Date},
    applicationsnumber: {type: Number, default : "0"}
});

const model = mongoose.model('Job', jobSchema);

module.exports = model;