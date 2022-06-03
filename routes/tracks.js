const router = require('express').Router()
const {validatorCreateItem, validatorGetItem} = require('../validators/tracks')
const {getItems, createItem, getItem, updateItem, deleteItem} = require('../controllers/tracks')
const authMiddleware = require('../middleware/session')
const checkRol = require('../middleware/rol')

router.get('/', authMiddleware, getItems)

router.get('/:id', authMiddleware, validatorGetItem, getItem)

router.post('/', authMiddleware, checkRol(["admin"]), validatorCreateItem, createItem)

router.put('/:id', authMiddleware, validatorGetItem, validatorCreateItem, updateItem)

router.delete('/:id', authMiddleware, validatorGetItem, deleteItem)

module.exports = router