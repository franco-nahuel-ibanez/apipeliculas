const {TracksModel} = require('../models')


const getItems = async (req, res) => {
    const data = await TracksModel.find({})    
    res.send({data})
}
const getItem = (req, res) => {}

const createItem = async (req, res) => {
    const {body} = req

    const data = await TracksModel.create(body)
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