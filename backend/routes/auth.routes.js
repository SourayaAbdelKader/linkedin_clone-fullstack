const {Router} = require('express');
const router = Router();
const {login, signup} = require('../controllers/auth.controller');

router.post('/login', login);
router.post('/signup', signup);

module.exports = router;