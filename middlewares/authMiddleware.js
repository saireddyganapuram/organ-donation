const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret';

const isLoggedIn = (req, res, next) => {
    const token = req.cookies.donorToken;

    if (!token) {
        console.log('No token found, redirecting to login');
        return res.redirect('/donors/login');
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            console.log('JWT verification failed:', err.message);
            return res.redirect('/donors/login'); 
        }

        req.isAuthenticated = true;
        req.donorId = decoded.donorId; 
        next(); 
    });
};

module.exports = isLoggedIn;