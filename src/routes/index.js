// src/routes/index.js
const hello = require('./HelloWorld');
const siteRoutes = require('./SiteRoutes');
const login = require('./Login');
const signUp = require('./SignUp');
const userRoutes = require('./UserRoutes');

function index(app) {

    app.use('/hello', hello)
    app.use('/usersSite', userRoutes)
    app.use('/signup', signUp)
    app.use('/login', login)
    app.use('/', siteRoutes)

}

module.exports = index
