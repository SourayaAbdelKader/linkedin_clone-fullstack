const {Router} = require('express');
const {getAllCompanies, getCompanyById, getCompanyrByEmail, addJob, getJobsByCompany, getJobs} = require('../controllers/companies.controller');
const authMiddleware = require('../middlewares/auth.middleware');
//const adminMiddleware = require('../middlewares/admin.middleware');
const router = Router();

router.get('/', authMiddleware, getAllCompanies);
router.get('/company/:id', getCompanyById);
router.get('/company/:email', getCompanyrByEmail);
router.post('/job', addJob);
router.get('/job/:id', getJobsByCompany);
router.get('/jobs', getJobs);

module.exports = router;