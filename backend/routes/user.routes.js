const {Router} = require('express');
const {applyForJob, getAllUsers, getUserById, getAllUserDetails, updateUser, deleteUser, getUserByEmail, addEducation, addExperience, addQualifications, updateEducation, updateQualification, updateExperience, deleteEducation, deleteExperience, deleteQualification, followCompany} = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const router = Router();
// routes related to the user
router.get('/', authMiddleware, getAllUsers);
router.get('/:id', getUserById);
router.get('/:email', getUserByEmail);
router.put('/', updateUser);
router.delete('/', deleteUser);
// routes related to the user's education
router.post('/education', addEducation);
router.put('/', updateEducation);
router.delete('/', deleteEducation);
// routes related to the user's qualifications
router.post('/experience', addQualifications);
router.put('/', updateQualification);
router.delete('/', deleteQualification);
// routes related to the user's experience
router.post('/experience', addExperience);
router.put('/', updateExperience);
router.delete('/', deleteExperience);
// other routes
router.post('/follow', followCompany);
router.get('/details/:id', getAllUserDetails);
router.post('/apply', applyForJob);

module.exports = router;