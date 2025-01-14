// src/controllers/siteUserController.js
const User = require('../models/User');

class SiteUserController {

    // [GET] /userHome
    async userHome(req, res) {
        res.render('users/userHomePage');
    }

}

module.exports = new SiteUserController();