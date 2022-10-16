const {Router} = require('express');
const {viewApplicants, getAllCompanies, getCompanyById, getCompanyrByEmail, addJob, getJobsByCompany, getJobs, searchJob} = require('../controllers/companies.controller');
const authCompanyMiddleware = require('../middlewares/auth.middleware');
const router = Router();

// routes related to the company
router.get('/', authCompanyMiddleware, getAllCompanies);
router.get('/company/:id', authCompanyMiddleware, getCompanyById);
router.get('/company/:email', getCompanyrByEmail);
// routes related to jobs and applications
router.post('/job', addJob);
router.get('/job/:id', getJobsByCompany);
router.get('/jobs', getJobs);
router.get('/searchjobs/:word', searchJob);
router.get('/applications/:id', viewApplicants);

module.exports = router;