const { v4: uuid } = require('uuid');


'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Todos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      todo_name: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      start_time: {
        type: Sequelize.STRING
      },
      end_time: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      priority: {
        type: Sequelize.ENUM,
        values: ['High','Low','Medium']
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Todos');
  }
};