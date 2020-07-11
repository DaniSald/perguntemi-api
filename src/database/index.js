const Sequelize = require('sequelize')
const dbconfig = require('../config/database')

const Answer = require('../models/Answer')

const connection = new Sequelize(dbconfig)

Answer.init(connection)

module.exports = connection
