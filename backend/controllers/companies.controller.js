const mongoose = require('mongoose');

const User = require('../models/users.model');
const Company = require('../models/companies.model');
const Follow = require('../models/follow.model');
const Application = require('../models/applications.model');
const Job = require('../models/jobs.model');

const getAllCompanies = async (req, res)=>{
    const companies = await Company.find();
    res.json(companies);
}

const getCompanyById = async (req, res)=>{
    const {id} = req.params;
    const company = await Company.findOne({id});
    res.json(company);
}

const getCompanyrByEmail = async (req, res)=>{
    const {id} = req.params;
    const company = await Company.findOne({email});
    res.json(company);
}

const addJob = async (req, res)=> {
    Job.create(req.body)
    .then((job)=>res.send(job))
    .catch(err=>res.status(400).send('Error'))
}

module.exports = {
    getAllCompanies,
    getCompanyrByEmail,
    getCompanyById,
    addJob
}