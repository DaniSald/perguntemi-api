'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'users', {
        id: {
          type: Sequelize.STRING(10),
          primaryKey: true,
          allowNull: false
        },
        email:
        {
          type: Sequelize.STRING(100),
          allowNull: false,
          unique: true
        },
        password: {
          type: Sequelize.STRING(30),
          allowNull: false
        },
        isAdmin: {
          type: Sequelize.BOOLEAN,
          allowNull: false
        }
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  }
}
