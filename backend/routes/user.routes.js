const {Router} = require('express');
const {applyForJob, getAllUsers, getUserById, getAllUserDetails, updateUser, deleteUser, getUserByEmail, addEducation, addExperience, addQualifications, updateEducation, updateQualification, updateExperience, deleteEducation, deleteExperience, deleteQualification, followCompany} = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const router = Router();
// routes related to the user
router.get('/', authMiddleware, getAllUsers);
router.get('/:id', authMiddleware, getUserById);
router.get('/:email', getUserByEmail);
router.put('/', authMiddleware, updateUser);
router.delete('/', authMiddleware, deleteUser);
// routes related to the user's education
router.post('/education', authMiddleware, addEducation);
router.put('/', authMiddleware, updateEducation);
router.delete('/', authMiddleware, deleteEducation);
// routes related to the user's qualifications
router.post('/experience', authMiddleware, addQualifications);
router.put('/', authMiddleware, updateQualification);
router.delete('/', authMiddleware, deleteQualification);
// routes related to the user's experience
router.post('/experience', authMiddleware, addExperience);
router.put('/', authMiddleware, updateExperience);
router.delete('/', authMiddleware, deleteExperience);
// other routes
router.post('/follow', followCompany);
router.get('/details/:id', getAllUserDetails);
router.post('/apply', applyForJob);

module.exports = router;