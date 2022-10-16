const mongoose = require('mongoose'), Schema = mongoose.Schema;
const Job = require('../models/jobs.model.js');
const User = require('../models/users.model.js');

const applicationSchema = new mongoose.Schema({
    job : { type: Schema.Types.ObjectId, ref: 'Job' },
    user : { type: Schema.Types.ObjectId, ref: 'User' },
});

const model = mongoose.model('Application', applicationSchema);

module.exports = model;
