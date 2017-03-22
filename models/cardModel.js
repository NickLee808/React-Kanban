'use strict';
module.exports = function(sequelize, DataTypes) {
  var Card = sequelize.define('Card', {
    title: DataTypes.STRING,
    priority: DataTypes.STRING,
    status: DataTypes.STRING,
    createdBy: DataTypes.STRING,
    assignedTo: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {

        //define associations here
        
      }
    }
  });
  return Card;
};