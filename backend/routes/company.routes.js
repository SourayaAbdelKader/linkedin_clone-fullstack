const {Router} = require('express');
const {getAllCompanies, getCompanyById, getCompanyrByEmail, addJob} = require('../controllers/companies.controller');
const authMiddleware = require('../middlewares/auth.middleware');
//const adminMiddleware = require('../middlewares/admin.middleware');
const router = Router();

router.get('/', authMiddleware, getAllCompanies);
router.get('/:id', getCompanyById);
router.get('/:email', getCompanyrByEmail);
router.post('/job', addJob);


module.exports = router;