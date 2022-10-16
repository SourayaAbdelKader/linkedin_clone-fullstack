const mongoose = require('mongoose');

const Company = require('../models/companies.model');
const Application = require('../models/applications.model');
const Job = require('../models/jobs.model');

// get the company information
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

// functions related to jobs
const addJob = async (req, res)=> {
    Job.create(req.body)
    .then((job)=>res.send(job))
    .catch(err=>res.status(400).send('Error'))
}

const getJobsByCompany = async (req, res)=> {
    const {id} = req.params;
    const job = await Job.find({company : id});
    res.json(job);
}

const getJobs = async (req, res)=> {
    const jobs = await Job.find();
    res.json(jobs);
}

const searchJob = async (req, res)=> {
    const {word} = req.params;
    const jobs = await Job.find({title : word});
    res.json(jobs);
}

const viewApplicants = async (req, res)=> {
    const {id} = req.params;
    const application = await Application.find({job: id});
    res.json(application);
}

module.exports = {
    getAllCompanies,
    getCompanyrByEmail,
    getCompanyById,
    addJob,
    getJobsByCompany,
    getJobs,
    searchJob,
    viewApplicants
}