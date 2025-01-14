// src/routes/UserRoutes.js
const express = require('express');
const router = express.Router();
const siteUserController = require('../controllers/siteUserController');

router.get('/', siteUserController.userHome);

module.exports = router;