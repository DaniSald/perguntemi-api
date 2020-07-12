const Answer = require('../models/Answer')
const dbConnection = require('../database/index')
const { QueryTypes } = require('sequelize')
const rng = require('../../build/Release/rng')

module.exports = {
  async createAnswer (req, res) {
    try {
      const { id, answer, email } = req.body

      await Answer.create({ id, answer, email })

      return res.status(201).json({ status: 200, message: 'Answer created' })
    } catch (error) { console.log(error) }
  },

  async getAnswer (req, res) {
    try {
      const rows = await Answer.count({ col: 'id' })

      const row = rng.rng(rows)

      const result = await dbConnection.query(`SELECT answer, id FROM (SELECT answer, id, ROW_NUMBER () OVER () FROM answers) AS result WHERE row_number = ${row};`, { type: QueryTypes.SELECT })

      return res.status(200).json(result[0])
    } catch (error) {
      return res.status(400).json({ status: 400, message: 'Verify request' })
    }
  },

  async deleteAnswer (req, res) {
    const { id } = req.params

    const result = await Answer.destroy({ where: { id } })

    if (result === 0) {
      return res.status(404).json({ status: 404, message: 'Answer not found' })
    }

    return res.status(200).json({ status: 200, message: 'Deleted' })
  }

}
