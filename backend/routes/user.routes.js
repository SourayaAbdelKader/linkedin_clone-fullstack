const {Router} = require('express');
const {getAllUsers, getUserById, updateUser, deleteUser, getUserByEmail, addEducation} = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');
//const adminMiddleware = require('../middlewares/admin.middleware');
const router = Router();

router.get('/', authMiddleware, getAllUsers);
router.get('/:id', getUserById);
router.get('/:email', getUserByEmail);
router.put('/', updateUser);
router.delete('/', deleteUser);
router.post('/education', addEducation);

module.exports = router;