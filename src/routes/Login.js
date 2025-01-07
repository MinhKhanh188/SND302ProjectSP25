// src/routes/SignUp.js
const express = require('express');
const router = express.Router();

const siteLoginController = require('../controllers/siteLoginController');

router.get('/', siteLoginController.login);

module.exports = router;
