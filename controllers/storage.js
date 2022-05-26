const {StoragesModel} = require('../models')
const PUBLIC_URL = process.env.PUBLIC_URL

const getItems = async (req, res) => {
    const data = await StoragesModel.find({})    
    res.send({data})
}
const getItem = (req, res) => {}

const createItem = async (req, res) => {
    const {body, file} = req

    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await StoragesModel.create(fileData)
    res.send({data})
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