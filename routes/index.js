const login = require('../controllers/login')
const article = require('../controllers/post')
const register = require('../controllers/register')
const { responSeccess } = require('../utils/message')

const route = require('express').Router()

route.get('/api', (req, res) => {
    responSeccess(100, null, "hallo", res)
})

route.post('/api/register', register)
route.post('/api/login', login)
route.post('/api/article/post', article)

module.exports = {
    route
}