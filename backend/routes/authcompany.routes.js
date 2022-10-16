const {Router} = require('express');
const {companyLogin, companySignup} = require('../controllers/authcompany.controller');
const companyrouter = Router();

companyrouter.post('/companylogin', companyLogin);
companyrouter.post('/companysignup', companySignup);

module.exports = companyrouter;