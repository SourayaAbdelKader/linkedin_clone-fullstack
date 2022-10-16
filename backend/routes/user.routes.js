const {Router} = require('express');
const {getAllUsers, getUserById, updateUser, deleteUser} = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');
//const adminMiddleware = require('../middlewares/admin.middleware');
const router = Router();

router.get('/', authMiddleware, getAllUsers);
router.get('/:id', getUserById);
router.put('/', updateUser);
router.delete('/', deleteUser);

module.exports = router;