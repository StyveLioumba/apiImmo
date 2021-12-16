'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AdvertisementTags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      AdvertisementId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        onDelete:"CASCADE",
        references:{
          model:"Advertisements",
          key:"id"
        }
      },
      TagId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        onDelete:"CASCADE",
        references:{
          model:"Tags",
          key:"id"
        }
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
    await queryInterface.dropTable('AdvertisementTags');
  }
};