const hello = require('./HelloWorld');
 const siteRoutes = require('./SiteRoutes');
 
 function index(app) {
 
 app.use('/hello', hello)
 app.use('/', siteRoutes)
 
 }
 
 module.exports = index
