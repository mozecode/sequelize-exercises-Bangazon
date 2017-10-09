'use strict';
let { castles } = require('../data/castles');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Castles', castles, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Castles', null, {});
  }
};
