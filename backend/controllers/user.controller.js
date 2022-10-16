const mongoose = require('mongoose');

const User = require('../models/users.model');
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

}

const addExperience = async (req, res)=>{

}

const addSkills = async (req, res)=>{

}

const addLanguages = async (req, res)=>{

}

const deleteUser = async (req, res)=>{
    const {id} = req.body
    UserModel.findByIdAndRemove(id)
    .then((user)=>res.send(user));
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    getUserByEmail,
    addEducation
}