'use strict';
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('pages', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING(250),
        allowNull: false
      },
      subtitle: {
        type: DataTypes.STRING(250),
        allowNull: false
      },
      content: {
        type: DataTypes.TEXT(),
        allowNull: false
      },
      image: {
        type: DataTypes.JSON(),
        allowNull: false
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
    return queryInterface.dropTable('pages');
  }
};