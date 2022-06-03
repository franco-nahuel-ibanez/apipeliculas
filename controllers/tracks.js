const { matchedData } = require('express-validator')
const {TracksModel} = require('../models')
const { handleHttpError } = require('../utils/handleError')


const getItems = async (req, res) => {
    try {
        const user = req.user
        const data = await TracksModel.find({})    
        res.send({data, user})
    } catch (error) {
        handleHttpError(res, "ERROR_GET_ITEMS",)
    }
}

const getItem = async (req, res) => {
    try {
        req = matchedData(req)
        const {id} = req

        const data = await TracksModel.findById(id)
        res.send({data})
    } catch (error) {
        handleHttpError(res, "ERROR_GET_ITEM")
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

const updateItem = async (req, res) => {
    try {
        const {id, ...body} = matchedData(req)
        
        const data = await TracksModel.findOneAndUpdate(
            id,
            body
        );
        res.send({data})
    } catch (error) {
        handleHttpError(res, "ERROR_UPDATE_ITEM",)
    }
}


const deleteItem = async (req, res) => {
    try {
        req = matchedData(req)
        const {id} = req

        const data = await TracksModel.delete({_id: id})
        res.send({data})
    } catch (error) {
        handleHttpError(res, "ERROR_DELETE_ITEM")
    }
}



module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}