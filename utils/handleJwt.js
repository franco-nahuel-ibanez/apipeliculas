const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

/**
 * Debes pasar un usuario
 * @param {*} user 
 */
const tokenSign = (user) => {
    const sign = jwt.sign(
        {
            _id: user._id,
            role: user.role
        },
        JWT_SECRET,
        {
            expiresIn:"2h"
        }
    );
    return sign
}

/**
 * Debes pasar el token de session de JWT
 * @param {*} tokenJwt 
 * @returns
 */
const verifyToken = async (tokenJwt) => {
    try {
        return jwt.verify(tokenJwt, JWT_SECRET)
    } catch (error) {
        return null
    }
}

module.exports = {tokenSign, verifyToken}