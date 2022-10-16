const mongoose = require('mongoose'), Schema = mongoose.Schema;
const Job = require('../models/jobs.model');
const User = require('../models/users.model');

const applicationSchema = new mongoose.Schema({
    job : {type: Schema.Types.ObjectId, ref: 'Job' },
    user : { type: Schema.Types.ObjectId, ref: 'User' },
});

const model = mongoose.model('Application', applicationSchema);

module.exports = model;
