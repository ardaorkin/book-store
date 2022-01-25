"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     *
     */
    return queryInterface.bulkInsert("books", [
      {
        name: "The Little Prince",
        author: "Antoine de Saint-Exupéry",
        publisher: "Mariner Books",
        category: "children",
        price: 15.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Oliver Twist",
        author: "Charles Dickens",
        publisher: "Independently published",
        category: "novel",
        price: 8.49,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Atomic Habits",
        author: "James Clear",
        publisher: "Penguin",
        category: "self help",
        price: 11.98,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
