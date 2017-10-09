'use strict';
module.exports = function(sequelize, DataTypes) {
  var Beach = sequelize.define('Beach', {
    name: {
      type:DataTypes.STRING,
      validate:{
        isAlpha:true
      }
    },
    location: DataTypes.STRING,
    sand_rating: DataTypes.INTEGER,
    createdAt: null,
    updatedAt: null
  });

  Beach.associate = (models) => {
    Beach.hasMany(models.Lifeguard,{
      foreignKey:'lifeguardId'
    });
  };
  return Beach;
};