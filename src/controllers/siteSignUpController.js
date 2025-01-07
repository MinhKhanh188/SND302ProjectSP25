// src/controllers/siteSignUpController.js
const User = require('../models/User');
const bcrypt = require('bcryptjs');

class siteSignUpController {

    //[GET] /signUp
    async signUp(req, res) {
        res.render('pages/SignUp');
    }

    //[POST] /signupToApp
    async signUpToApp(req, res, next) {
        const { username, email, password } = req.body;

        try {
            // Validate required fields
            if (!username || !email || !password) {
                return res.status(400).send('All fields are required');
            }

            // Check if user already exists (either username or email)
            const existingUser = await User.findOne({ $or: [{ username }, { email }] });
            if (existingUser) {
                return res.status(400).send('Username or email already exists');
            }
            
            // Hash the password before saving to database
            const passwordHash = await bcrypt.hash(password, 10);

            // Create a new user
            const newUser = new User({
                username,
                email,
                passwordHash,
            });

            // Save the new user to the database
            await newUser.save();

            // Redirect or send a success response
            res.redirect('/');  // Redirect to login after successful signup
        } catch (error) {
            console.error('Error during signup:', error);
            next(error);  // Pass the error to the error-handling middleware
        }
    }
}

module.exports = new siteSignUpController();