// src/routes/HelloWorld.js
const express = require('express');
 const router = express.Router();
 const showDataController = require('../controllers/siteDataController');
 const authenticate = require('../middleware/authenticate');

 // Protect all `/hello` routes with `authenticate`
router.use(authenticate);
 
 router.use('/:slug', showDataController.cappybaraSayHello);
 router.get('/', showDataController.showHello);
 
 module.exports = router;
