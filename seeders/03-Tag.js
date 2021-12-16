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
    await queryInterface.bulkInsert('Tags',[
      {
        name:"Coup de coeur",
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        name:"Bien exceptionnel",
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        name:"Vue de reve",
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        name:"Emplacement privilégié",
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
