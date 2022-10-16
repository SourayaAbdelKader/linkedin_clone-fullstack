const {Router} = require('express');
const {viewApplicants, getAllCompanies, getCompanyById, getCompanyrByEmail, addJob, getJobsByCompany, getJobs, searchJob} = require('../controllers/companies.controller');
const authCompanyMiddleware = require('../middlewares/auth.middleware');
const router = Router();

router.get('/', authCompanyMiddleware, getAllCompanies);
router.get('/company/:id', getCompanyById);
router.get('/company/:email', getCompanyrByEmail);
router.post('/job', addJob);
router.get('/job/:id', getJobsByCompany);
router.get('/jobs', getJobs);
router.get('/searchjobs/:word', searchJob);
router.get('/applications/:id', viewApplicants);

module.exports = router;