const deleteArticle = require('../controllers/delete')
const { detailArticle, articleList } = require('../controllers/get')
const login = require('../controllers/login')
const articlePost = require('../controllers/post')
const register = require('../controllers/register')
const updateArticle = require('../controllers/update')
const { responSeccess } = require('../utils/message')

const route = require('express').Router()

route.get('/api', (req, res) => {
    responSeccess(100, null, "hallo", res)
})

route.post('/api/register', register)
route.post('/api/login', login)
route.post('/api/article/post', articlePost)
route.get('/api/article/:_id', detailArticle)
route.get('/api/articles', articleList)
route.delete('/api/article/delete/:_id', deleteArticle)
route.patch('/api/article/patch/:_id', updateArticle)

module.exports = {
    route
}