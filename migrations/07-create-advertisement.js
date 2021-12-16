'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Advertisements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      sector: {
        type: Sequelize.STRING
      },
      room: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      picture: {
        type: Sequelize.STRING
      },
      TypeId:{
        allowNull:false,
        onDelete:"CASCADE",
        type:Sequelize.INTEGER,
        references:{
          model:"Types",
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
    await queryInterface.dropTable('Advertisements');
  }
};