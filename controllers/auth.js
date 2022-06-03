const { matchedData } = require("express-validator")
const { UsersModel } = require("../models")
const { tokenSign } = require("../utils/handleJwt")
const { encrypt } = require("../utils/handlePassword")
const {handleHttpError} = require('../utils/handleError')
const { compare } = require("bcryptjs")

/**
 * Es el encargadado de registrar un usuario.
 * @param {*} req 
 * @param {*} res 
 */
const registerController = async (req, res) => {
    try {
        req = matchedData(req)
        const password = await encrypt(req.password)
        const body = {...req, password }
        const dataUser = await UsersModel.create(body)
        dataUser.set('password', undefined, {strict: false})
        
        const data = {
            token: tokenSign(dataUser),
            user: dataUser
        }

        res.send({data})
    } catch (error) {
        handleHttpError(res, 'ERROR_REGISTER_USER')
    }
}

/**
 * Es el encargado de logear a un usuario
 * @param {*} req 
 * @param {*} res 
 */
const loginController = async (req, res) => {
    try {
        req = matchedData(req)
        const user = await UsersModel.findOne({email: req.email}).select('password name role email')
        if(!user){
            handleHttpError(res, 'USER_NOT_EXISTS', 404)
            return
        }

        const hashPassword = user.get('password')
        const check = await compare(req.password, hashPassword)

        if(!check){
            handleHttpError(res, "PASSWORD_INVALID", 401)
            return
        }

        user.set('password', undefined, {strict: false})

        const data = {
            token: tokenSign(user),
            user
        }

        res.send({data})
    } catch (error) {
        handleHttpError(res, 'ERROR_LOGIN_USER')
    }
}


module.exports = {
    registerController,
    loginController
}