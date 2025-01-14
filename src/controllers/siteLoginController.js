//src/controllers/siteLoginController.js
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class siteLoginController {
    //[GET] /login
    async login(req, res) {
        // Render the login page
        res.render('pages/Login');
    }

    //[POST] /login
async loginToApp(req, res, next) {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send('Invalid email or password');
        }

        const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
        if (!isPasswordValid) {
            return res.status(400).send('Invalid email or password');
        }

        // Generate a JWT
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN } // Example: '1h'
        );

        // Set the token as an HTTP-only cookie
        res.cookie('auth_biscuit', token, { 
            httpOnly: true, // Prevent access from client-side JavaScript
            secure: process.env.NODE_ENV === 'production', // Use HTTPS in production
            maxAge: 30*60000 // cookie expiration time
        });

        // Redirect to homepage
        res.redirect('/');
    } catch (error) {
        next(error);
    }
}

}

module.exports = new siteLoginController();
