const Company = require('../models/companies.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const companyLogin = async (req, res)=>{
    const {email, password} = req.body;
    
    const company = await Company.findOne({email}).select("+password");

    if(!company) return res.status(404).json({message: "Invalid Credentials"});

    const isMatch = bcrypt.compare(password, company.password);
    if(!isMatch) return res.status(404).json({message: "Invalid Credentials"});

    const token = jwt.sign({email: company.email, name: company.name}, process.env.JWT_SECRET_KEY, {
        expiresIn: '25h'
    });
    res.status(200).json(token)
}

const companySignup = async (req, res)=>{
    const {name, email, password} = req.body;
    try{
        const company = new Company();
        company.name = name;
        company.email = email;
        company.password = await bcrypt.hash(password, 10);

        await company.save();
        res.json(company)
    }catch(err){
        res.status(400).json({
            message: err.message
        })
    }
}

module.exports = {
    companyLogin,
    companySignup
}