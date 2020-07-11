require('dotenv/config')

const express = require('express')
const routes = require('./routes')
const bodyParser = require('body-parser')
const PORT = process.env.PORT

require('./database')

const app = express()

app.use(bodyParser.json())
app.use(routes)
app.use(express.json())

app.listen(PORT, () => console.log(`listening to port: ${PORT}`))
