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

const updateUser = async (req, res)=>{
    const users = await User.find();
    res.json(users);
}

const deleteUser = async (req, res)=>{
    const users = await User.find();
    res.json(users);
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}