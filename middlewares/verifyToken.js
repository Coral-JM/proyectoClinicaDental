const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try {
        const bearerToken = req.headers.autorization;

        if (!bearerToken) {
            return res.json({
                success: true,
                message: "Access denied"
            })
        }
        const token = bearerToken.split(" ")[1];
        const decoded = jwt.verify(token, 'secreto');

        req.userId = decoded.userId;
        req.roleId = decoded.roleId;

        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Token invalid",
            error: error
        })
    }
}

module.exports = auth;