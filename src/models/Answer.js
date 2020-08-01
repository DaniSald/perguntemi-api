const { Model, DataTypes } = require('sequelize')

class Answer extends Model {
  static init (sequelize) {
    super.init({
      id: { type: DataTypes.STRING(20), primaryKey: true },
      answer: DataTypes.STRING(100),
      email: DataTypes.STRING(100)
    }, {
      sequelize
    })
  }
}

module.exports = Answer
