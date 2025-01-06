const express = require('express');
 const router = express.Router();
 const showDataController = require('../controllers/siteDataController');
 
 router.use('/:slug', showDataController.cappybaraSayHello);
 router.get('/', showDataController.showHello);
 
 module.exports = router;
