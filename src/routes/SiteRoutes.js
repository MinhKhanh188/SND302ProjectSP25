const express = require('express');
 const router = express.Router();
 const siteDataController = require('../controllers/siteDataController');
 
 router.get('/', siteDataController.Home);
 
 module.exports = router;
