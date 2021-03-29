const { verifyToken } = require("../common/utils");

module.exports = async (req, res, next) => {

    let baseUrl = req.baseUrl;

    if (baseUrl.includes('login') || baseUrl.includes('register') || baseUrl.includes('health') || baseUrl.includes('forget')) {
        return next();
    }

    try {
        const token = req.headers.authorization.split(' ')[1];
        const payload = await verifyToken(token);
        req.currentUser = payload;
        next();
    } catch(error) {
        let err = new Error('Unauthorized request');
        err.status = 401;
        next(err);
    }

}