const router = require('express').Router()
const {validatorCreateItem} = require('../validators/tracks')
const {getItems, createItem} = require('../controllers/tracks')

router.get('/', getItems)

router.post('/', validatorCreateItem, createItem)



module.exports = router