'use strict';
let { tools } = require('../data/tools');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tools', tools, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tools', null, {});
  }
};
