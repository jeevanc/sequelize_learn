'use strict';
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.skill);
      }
    }
  });
  return user;
};
