'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserRoles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId:{
        allowNull:false,
        type:Sequelize.INTEGER,
        onDelete:"CASCADE",
        references:{
          model:"Users",
          key:"id"
        }
      },
      RoleId:{
        allowNull:false,
        type:Sequelize.INTEGER,
        onDelete:"CASCADE",
        references:{
          model:"Roles",
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
    await queryInterface.dropTable('UserRoles');
  }
};