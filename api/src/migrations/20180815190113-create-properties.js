'use strict';
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('properties', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      propertie_code: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      title: {
        type: DataTypes.STRING(250),
        allowNull: false
      },
      slug: {
        type: DataTypes.STRING(250),
        allowNull: false
      },
      content: {
        type: DataTypes.TEXT(),
        allowNull: false
      },
      image: {
        type: DataTypes.JSON(),
        allowNull: true
      },
      images_gallery: {
        type: DataTypes.JSON(),
        allowNull: true
      },
      info_propertie: {
        type: DataTypes.JSON(),
        allowNull: false
      },
      status: {
        type: DataTypes.ENUM('0','1'),
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
    return queryInterface.dropTable('properties');
  }
};