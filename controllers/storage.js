const fs = require('fs')
const {StoragesModel} = require('../models')
const {handleHttpError} = require('../utils/handleError')
const {matchedData} = require('express-validator')

const PUBLIC_URL = process.env.PUBLIC_URL
const MEDIA_PATH = `${__dirname}/../storage`

const getItems = async (req, res) => {
    try {
        const data = await StoragesModel.find({})    
        res.send({data})
    } catch (error) {
        handleHttpError(res, 'ERROR_GET_ITEMS')
    }
}
const getItem = async (req, res) => {
    try {
        const {id} = matchedData(req)
        const data = await StoragesModel.findById(id)    
        res.send({data})
    } catch (error) {
        handleHttpError(res, 'ERROR_DETAILS_ITEMS')
    }
}

const createItem = async (req, res) => {
    const {file} = req
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await StoragesModel.create(fileData)
    res.send({data})
}


const deleteItem = async(req, res) => {
    try {
        const {id} = matchedData(req)
        
        const dataFile = await StoragesModel.findById(id)
        await StoragesModel.deleteOne({_id: id})
        const {filename} = dataFile   
        const filePath = `${MEDIA_PATH}/${filename}`
        fs.unlinkSync(filePath);

        const data = {
            filePath,
            deleted:1
        }
        res.send({data})
    } catch (error) {
        handleHttpError(res, 'ERROR_DELETE_ITEM')
    }
}



module.exports = {
    getItems,
    getItem,
    createItem,
    deleteItem
}