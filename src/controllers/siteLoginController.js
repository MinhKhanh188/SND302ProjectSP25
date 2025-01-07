//src/controllers/siteLoginController.js
const User = require('../models/User');

class siteLoginController {

    //[GET] /login
    async login(req, res) {
        res.render('pages/Login');
    }

    
}

module.exports = new siteLoginController();