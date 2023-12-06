'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return Promise.all([
      queryInterface.bulkInsert('Authors', [
        {
          'name': 'Ashley Galvin',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ]),
      queryInterface.bulkInsert('Authors', [
        {
          'name': 'Patrick Beach',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ]),
      queryInterface.bulkInsert('Authors', [
        {
          'name': 'MacKenzie Miller',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ])
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Authors', null, {})
  }
};
