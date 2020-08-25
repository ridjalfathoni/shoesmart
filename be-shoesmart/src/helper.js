const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
module.exports = {
    generateToken(userData) {
        return jwt.sign(userData, process.env.SECRET_KEY, {
            expiresIn: '15s'
        })
    },
    generateRefreshToken(userData) {
        return jwt.sign(userData, process.env.REFRESH_TOKEN, {
            expiresIn: '7d'
        })
    },
    bcryptCompareSync(password, comparePassword) {
        return bcrypt.compareSync(password, comparePassword)
    }
}