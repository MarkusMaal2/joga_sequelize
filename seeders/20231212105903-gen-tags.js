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
      queryInterface.bulkInsert('Tags', [{ name: 'yogapractive', createdAt: new Date(), updatedAt: new Date() }]),
      queryInterface.bulkInsert('Tags', [{ name: 'yogainspiration', createdAt: new Date(), updatedAt: new Date() }]),
      queryInterface.bulkInsert('Tags', [{ name: 'wellness', createdAt: new Date(), updatedAt: new Date() }]),
      queryInterface.bulkInsert('Tags', [{ name: 'nature', createdAt: new Date(), updatedAt: new Date() }]),
      queryInterface.bulkInsert('Tags', [{ name: 'spiritual', createdAt: new Date(), updatedAt: new Date() }]),
      queryInterface.bulkInsert('Tags', [{ name: 'sport', createdAt: new Date(), updatedAt: new Date() }]),
      queryInterface.bulkInsert('Tags', [{ name: 'yogateacher', createdAt: new Date(), updatedAt: new Date() }]),
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Tags', null, {})
  }
};
