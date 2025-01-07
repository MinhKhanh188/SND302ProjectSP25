// src/routes/SignUp.js
const express = require('express');
const router = express.Router();
const siteSignUpController = require('../controllers/siteSignUpController');

router.get('/', siteSignUpController.signUp);
router.post('/signupToApp', siteSignUpController.signUpToApp);

module.exports = router;