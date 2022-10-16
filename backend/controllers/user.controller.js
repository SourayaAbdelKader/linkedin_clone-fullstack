const mongoose = require('mongoose');

const User = require('../models/users.model');
const Education = require('../models/education.model');
const Experience = require('../models/experience.model');
const Qualification = require('../models/qualifications.model');
const Follow = require('../models/follow.model');
const Application = require('../models/applications.model');const Job = require('../models/jobs.model');

// functions related to the user info (user model) 
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

const deleteUser = async (req, res)=>{
    const {id} = req.body
    UserModel.findByIdAndRemove(id)
    .then((user)=>res.send(user))
    .catch(err=>res.status(400).send('Error'));
}


// functions related to the user education (education model) 
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

const deleteEducation= async (req, res)=>{
    const {id} = req.body
    Education.findByIdAndRemove(id)
    .then((education)=>res.send(education))
    .catch(err=>res.status(400).send('Error'));
}

// functions related to the user experience (experience model) 
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
    .catch((err)=>res.status(400).send(err));
}

const deleteExperience = async (req, res)=>{
    const {id} = req.body
    Experience.findByIdAndRemove(id)
    .then((experience)=>res.send(experience))
    .catch(err=>res.status(400).send('Error'));
}

// functions related to the user qualifications (qualification model) 
const addQualifications = async (req, res)=>{
    Qualification.create(req.body)
    .then((qualification)=>res.send(qualification))
    .catch(err=>res.status(400).send('Error'));
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
    .catch((err)=>res.status(400).send(err));
}

const deleteQualification = async (req, res)=>{
    const {id} = req.body
    Qualification.findByIdAndRemove(id)
    .then((qualification)=>res.send(qualification))
    .catch(err=>res.status(400).send('Error'));
}

// a function to get all the user info from all the models
const getAllUserDetails = async (req, res)=>{
    const {id} = req.params;
    const user = await User.findOne({id});
    const education = await Education.find({user : id});
    const experience = await Experience.find({user : id});
    const qualifications = await Qualification.find({user : id});
    const details = {"user": user, "education": education, "experience": experience, "qualifications":qualifications };
    res.json(details);
}

const applyForJob = async (req, res)=>{
    Application.create(req.body)
    .then((application)=>res.send(application))
    .catch(err=>res.status(400).send('Error'))
}

const followCompany = async (req, res)=>{
    Follow.create(req.body)
    .then((follow)=>res.send(follow))
    .catch(err=>res.status(400).send('Error'))
}

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
    followCompany,
    getAllUserDetails,
    applyForJob
}