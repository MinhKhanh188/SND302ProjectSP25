const express = require('express');
 const morgan = require('morgan');
 const methodOverride = require('method-override');
const route = require('./routes');
 const { engine } = require('express-handlebars');
 const path = require('path');
 require('dotenv').config();
 
 const port = process.env.PORT;
 
 const app = express();
 
 const databaseConnect = require('./config/db/databaseConnect');
 databaseConnect.connect();
 
 // Use morgan middleware with 'dev' format
 app.use(morgan('dev'));
 // Body parsing middleware
 app.use(express.json());
 // Parses JSON data
 app.use(express.urlencoded({ extended: true })); // Parses URL-encoded form data
 // Method override middleware
 app.use(methodOverride('_method'));
 
 // Template engine
 app.engine('.hbs', engine({extname: '.hbs'})); // Use 'engine' here
 app.set('view engine', '.hbs'); app.set('views', path.join(__dirname, './views')); // Set the views directory
 
 
 // Routes init
 route(app);
 
 // Server init
 app.listen(port, () => {
 console.log('Server running on port ',port);
 });
