const router = require('express').Router()
const {UsersModel} = require('../models')
const {matchedData} = require('express-validator')
const {validatorRegister, validatorLogin} = require('../validators/auth')
const {encrypt, compare} = require('../utils/handlePassword')
const {tokenSign} = require('../utils/handleJwt')

router.post('/register', validatorRegister, async (req, res) => {
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
        console.log(error)
    }

})


module.exports = router