const jwt = require('jsonwebtoken');
require('dotenv/config');

const requireAuth = (req, res, next) => {
    try {
        if (req.path.startsWith('/home') && ['GET','POST','PUT'].includes(req.method)) {
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
            result: null,
            result_message: {
                type: "error",
                message: "something went wrong, please try again later",
                title: "Error",
                privateBackend: {
                    type:  "BadRequestError",
                    message: err._message ? err._message : err.message,
                    title: "Bad request"
                }
            }
        });
    }
}


module.exports = { requireAuth };