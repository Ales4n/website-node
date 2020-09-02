const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', { tittle: 'Website'})
})

router.get('/contact', (req, res) => {
    res.render('contact', { tittle: 'Contact Page'})
})

module.exports = router