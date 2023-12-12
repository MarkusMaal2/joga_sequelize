'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return Promise.all([
        queryInterface.changeColumn('Authors', 'id', {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
        }),
        queryInterface.changeColumn('Authors', 'name',
        {
          type: Sequelize.STRING,
          allowNull: false,
        })
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return Promise.all([
        queryInterface.dropTable('Authors')
    ])
  }
};
