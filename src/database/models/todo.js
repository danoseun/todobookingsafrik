'use strict';

module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    todo_name: {
      type:DataTypes.STRING,
    },
    status: {
      type: DataTypes.BOOLEAN
    },
    start_time: {
      type: DataTypes.STRING,
    },
    end_time: {
      type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    priority: {
        type: DataTypes.ENUM,
        values: ['High','Low','Medium']
    }
  }, {});
  Todo.associate = function(models) {
    // associations can be defined here
  };
  return Todo;
};