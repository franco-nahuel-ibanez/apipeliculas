const router = require('express').Router()
const uploadMiddleware = require('../utils/handleStorage')
const {createItem, getItems, getItem, deleteItem} = require('../controllers/storage')
const {validatorGetItem} = require('../validators/storage')

router.get('/', getItems)

router.get('/:id', validatorGetItem, getItem)

router.post('/', uploadMiddleware.single("myfile"), createItem)

router.delete('/:id', validatorGetItem, deleteItem)

module.exports = router