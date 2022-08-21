'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();
    return await queryInterface.bulkInsert("Users",[
      { name: "のだちえ", email: "chie7noda@gmail.com", birth: now, createdAt: now, updatedAt: now},
      { name: "ながさわりょうや", email: "nagasawaryoya@gmail.com", birth: now, createdAt: now, updatedAt: now},
      { name: "さとうたくや", email: "19870909takuya@gmail.com", birth: now, createdAt: now, updatedAt: now},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("Users", null, {} );
  }
};