const mongoose = require('mongoose');

const User = require('../models/users.model');
const Education = require('../models/education.model');
const Experience = require('../models/experience.model');
const Qualification = require('../models/qualifications.model');
const Company = require('../models/companies.model');
const Follow = require('../models/follow.model');
const Application = require('../models/applications.model');
const Job = require('../models/jobs.model');

const getAllUsers = async (req, res)=>{
    const users = await User.find();
    res.json(users);
}

const getUserById = async (req, res)=>{
    const {id} = req.params;
    const user = await User.findOne({id});
    res.json(user);
}

const getUserByEmail = async (req, res)=>{
    const {id} = req.params;
    const user = await User.findOne({email});
    res.json(user);
}

const updateUser = async (req, res)=>{
    const {id, ...data} = req.body
    User.findByIdAndUpdate(id,{
        name: data.name,
        email: data.email,
        phone: data.phone,
        gender: data.gender,
        location: data.location,
        about: data.about,
        birthdate: data.birthdate,
        picture: data.picture,
        header: data.header
    })
    .then((user)=>res.send(user))
    .catch((err)=>res.status(400).send(err))
}

const addEducation = async (req, res)=>{
    Education.create(req.body)
    .then((education)=>res.send(education))
    .catch(err=>res.status(400).send('Error'))
}

const updateEducation = async (req, res)=>{
    const {id, ...data} = req.body
    Education.findByIdAndUpdate(id,{
        school: data.school,
        degree: data.degree,
        field: data.field,
        grade: data.grade,
        startdate: data.startdate,
        enddate: data.enddate,
        gratuated: data.gratuated,
    })
    .then((education)=>res.send(education))
    .catch((err)=>res.status(400).send(err))
}

const addExperience = async (req, res)=>{
    Experience.create(req.body)
    .then((experience)=>res.send(experience))
    .catch(err=>res.status(400).send('Error'))
}

const updateExperience = async (req, res)=>{
    const {id, ...data} = req.body
    Experience.findByIdAndUpdate(id,{
        company: data.company,
        title: data.title,
        employement_type: data.employement_type,
        description: data.description,
        startdate: data.startdate,
        enddate: data.enddate,
        location: data.location,
        still_working: data.still_working
    })
    .then((experience)=>res.send(experience))
    .catch((err)=>res.status(400).send(err))
}

const addQualifications = async (req, res)=>{
    Qualification.create(req.body)
    .then((qualification)=>res.send(qualification))
    .catch(err=>res.status(400).send('Error'))
}

const updateQualification = async (req, res)=>{
    const {id, ...data} = req.body
    Qualification.findByIdAndUpdate(id,{
        company: data.company,
        title: data.title,
        description: data.description,
        startdate: data.startdate,
        enddate: data.enddate,
        location: data.location,
        still_working: data.still_working
    })
    .then((education)=>res.send(education))
    .catch((err)=>res.status(400).send(err))
}

const deleteUser = async (req, res)=>{
    const {id} = req.body
    UserModel.findByIdAndRemove(id)
    .then((user)=>res.send(user));
}

const deleteEducation= async (req, res)=>{
    const {id} = req.body
    Education.findByIdAndRemove(id)
    .then((education)=>res.send(education));
}

const deleteExperience = async (req, res)=>{
    const {id} = req.body
    Experience.findByIdAndRemove(id)
    .then((experience)=>res.send(experience));
}

const deleteQualification = async (req, res)=>{
    const {id} = req.body
    Qualification.findByIdAndRemove(id)
    .then((qualification)=>res.send(qualification));
}

const followCompany = async (req, res)=>{
    Follow.create(req.body)
    .then((follow)=>res.send(follow))
    .catch(err=>res.status(400).send('Error'))
}
const getAllUserDetails = (req, res)=>{}

module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    getUserByEmail,
    addEducation,
    addExperience,
    addQualifications,
    updateEducation,
    updateExperience,
    updateQualification,
    deleteEducation,
    deleteExperience,
    deleteQualification,
    followCompany
}