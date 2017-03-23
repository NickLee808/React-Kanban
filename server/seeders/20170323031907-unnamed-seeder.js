'use strict';

var cards = {
  title: 'TEST CARD',
  priority: 'Low',
  status: 'Queue',
  createdBy: new Date(),
  assignedTo: new Date()
};

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Cards', cards);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Cards', cards);
  }
};
