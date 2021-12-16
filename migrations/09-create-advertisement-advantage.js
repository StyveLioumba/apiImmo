'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AdvertisementAdvantages', {
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
      AdvantageId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        onDelete:"CASCADE",
        references:{
          model:"Advantages",
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
    await queryInterface.dropTable('AdvertisementAdvantages');
  }
};