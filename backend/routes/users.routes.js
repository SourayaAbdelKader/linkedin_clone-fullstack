const {Router} = require('express');
const {getAllUsers, getAdminAllUsers} = require('../controllers/users.controller');
const authMiddleware = require('../middlewares/auth.middleware');
//const adminMiddleware = require('../middlewares/admin.middleware');
const router = Router();

router.get('/', authMiddleware, getAllUsers);
//router.get('/admin', authMiddleware, adminMiddleware, getAdminAllUsers);


module.exports = router;