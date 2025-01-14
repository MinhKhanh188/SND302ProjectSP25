// src/middleware/authenticate.js
const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
    const token = req.cookies.auth_biscuit

    // Check if token exists
    if (!token) {
        return res.redirect('/login'); // Redirect to login if no token is found
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach user info (e.g., id, email) to req object
        next(); // Allow access to the next middleware/route
    } catch (error) {
        console.error('Invalid or expired token:', error.message);
        res.clearCookie('auth_biscuit'); // Clear invalid token from cookies
        return res.redirect('/login'); // Redirect to login on error
    }
}

module.exports = authenticate;
