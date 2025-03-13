const path = require('path');

/**
 * Middleware to handle the starter path '/'
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
const middleware_Login = (req, res, next) => {
    res.sendFile(path.normalize(__dirname + '/../../assets/login/index.html'));
    next();
}

module.exports = middleware_Login;