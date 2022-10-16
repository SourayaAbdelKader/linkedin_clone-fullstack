const {Router} = require('express');
const {getAllUsers, getUserById, updateUser, deleteUser, getUserByEmail, addEducation, addExperience, addQualifications, updateEducation, updateQualification, updateExperience, deleteEducation, deleteExperience, deleteQualification, followCompany} = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');
//const adminMiddleware = require('../middlewares/admin.middleware');
const router = Router();

router.get('/', authMiddleware, getAllUsers);
router.get('/:id', getUserById);
router.get('/:email', getUserByEmail);
router.put('/', updateUser);
router.delete('/', deleteUser);
router.post('/education', addEducation);
router.post('/experience', addExperience);
router.post('/experience', addQualifications);
router.put('/', updateEducation);
router.put('/', updateQualification);
router.put('/', updateExperience);
router.delete('/', deleteEducation);
router.delete('/', deleteExperience);
router.delete('/', deleteQualification);
router.post('/follow', followCompany);

module.exports = router;