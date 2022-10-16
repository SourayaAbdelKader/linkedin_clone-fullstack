const mongoose = require('mongoose'), Schema = mongoose.Schema;
const Company = require('../models/companies.model.js');
const User = require('../models/users.model.js');

const followSchema = new mongoose.Schema({
    job : { type: Schema.Types.ObjectId, ref: 'Company' },
    user : { type: Schema.Types.ObjectId, ref: 'User' },
});

const model = mongoose.model('Follow', followSchema);

module.exports = model;