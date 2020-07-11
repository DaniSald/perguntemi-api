const express = require('express')
const cors = require('cors')
const AnswerController = require('./controllers/AnswerController')
const routes = express.Router()

routes.use(cors())

routes.post('/create/answer', AnswerController.createAnswer)

routes.delete('/delete/answer/:id', AnswerController.deleteAnswer)

routes.get('/answer', AnswerController.getAnswer)

module.exports = routes
