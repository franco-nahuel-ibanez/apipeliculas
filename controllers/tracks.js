const { matchedData } = require('express-validator')
const {TracksModel} = require('../models')
const { handleHttpError } = require('../utils/handleError')


const getItems = async (req, res) => {
    try {
        const data = await TracksModel.find({})    
        res.send({data})
    } catch (error) {
        handleHttpError(res, "ERROR_GET_ITEMS",)
    }
}

const getItem = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const createItem = async (req, res) => {
    try {
        const body = matchedData(req)
        const data = await TracksModel.create(body)
        res.send({data})
    } catch (error) {
        handleHttpError(res, "ERROR_CREATE_ITEMS",)
    }
}


const updateItem = (req, res) => {}


const deleteItem = (req, res) => {}



module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}