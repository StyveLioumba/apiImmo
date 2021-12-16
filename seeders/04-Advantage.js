'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('Advantages',[
      {
        name:"Jardin",
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        name:"Balcon",
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        name:"Terrasse",
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        name:"Piscine",
        createdAt:new Date(),
        updatedAt:new Date()
      }
    ],{})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
