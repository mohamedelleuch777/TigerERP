const jwt = require('jsonwebtoken');
require('dotenv/config');

const requireAuth = (req, res, next) => {
    try {
        if (req.path.startsWith('/user') && ['GET','POST','PUT'].includes(req.method)) {
            next()
        } else {
            if(req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
                const token = req.headers.authorization.slice(7);
                jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
                    if(err) {
                        throw new Error("Invalid bearer token");
                    } else {
                        req.decodeToken = decoded;
                        next();
                    }
                });
            } else {
                throw new Error("Bearer token is missing");
            }
        }
    } catch (err) {
        res.json({
            result: false,
            message: err._message ? err._message : err.message,
        });
    }
}


module.exports = { requireAuth };