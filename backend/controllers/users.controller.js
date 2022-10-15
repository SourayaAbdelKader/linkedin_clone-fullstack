const User = require('../models/users.model')

const getAllUsers = async (req, res)=>{
    const users = await User.find();
    res.json(users);
}

module.exports = {
    getAllUsers,
    //getAdminAllUsers
}