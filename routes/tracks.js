const router = require('express').Router()

router.get('/tracks', (req, res) => {
    res.send('Hola Mundo')
})



module.exports = router