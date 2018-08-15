'use strict';
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('users', {
      id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true
      },
      name: {
          type: DataTypes.STRING(200),
          allowNull: false
      },
      email: {
          type: DataTypes.STRING(250),
          allowNull: false,
          unique: true
      },
      password: {
          type: DataTypes.STRING(128),
          allowNull: false,
          validate: {
              notEmpty: true
          }
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};