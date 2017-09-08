'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
     'users',
      'profile_img',{
          type: Sequelize.STRING
      }
    )

  },

  down: function (queryInterface, Sequelize) {
    ueryInterface.removeColumn(
        'users',
        'profile_img')

  }
};
