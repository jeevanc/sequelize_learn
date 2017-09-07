'use strict';
module.exports = function(sequelize, DataTypes) {
  var skill = sequelize.define('skill', {
    title: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Skill.belongsTo(models.user);
      }
    }
  });
  return skill;
};
