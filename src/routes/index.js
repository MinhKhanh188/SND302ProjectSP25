// src/routes/index.js
const hello = require('./HelloWorld');
const siteRoutes = require('./SiteRoutes');
const  login = require('./Login');
const signUp = require('./SignUp');

function index(app) {

    app.use('/hello', hello)
    app.use('/signup', signUp)
    app.use('/login', login)
    app.use('/', siteRoutes)

}

module.exports = index
