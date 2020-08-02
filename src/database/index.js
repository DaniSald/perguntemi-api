require('dotenv/config')

const Sequelize = require('sequelize')
const dbconfig = require('../config/database')

const Answer = require('../models/Answer')

let connection

if (process.env.HEROKU_POSTGRESQL_NAVY_URL) {
  connection = new Sequelize(process.env.HEROKU_POSTGRESQL_NAVY_URL, dbconfig)
} else {
  connection = new Sequelize(dbconfig)
}

Answer.init(connection)

module.exports = connection
