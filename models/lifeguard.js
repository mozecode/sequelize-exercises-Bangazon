'use strict';
module.exports=function (sequelize, DataTypes) {
  var Lifeguard = sequelize.define('Lifeguard', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    beachId: DataTypes.INTEGER
  });

  Lifeguard.associate= (models)=> {
        // associations can be defined here
    Lifeguard.belongsTo(models.Beach,{
      foreignKey:'beachId',
      onDelete:'CASCADE'
    });
  };

  Lifeguard.prototype.getFullName = function() {
    return `${this.first_name} ${this.last_name}`
  };//custom getter

  return Lifeguard;
};