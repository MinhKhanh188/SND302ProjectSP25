// src/controllers/siteDataController.js
class siteDataController {

    async showHello(req, res) {
        res.send('Hello World!');
    }

    async cappybaraSayHello(req, res) {
        res.send('Hello ' + req.params.slug);
    }

    async Home(req, res, next) {
        res.render('home');
    }

}
module.exports = new siteDataController();
