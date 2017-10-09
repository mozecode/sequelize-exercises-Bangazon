'use strict';
module.exports = (sequelize, DataTypes) => {
  var Castle = sequelize.define('Castle', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    beachId: DataTypes.INTEGER,
    createdAt: null,
    updatedAt: null
  });

  Castle.associate = (models)=> {
        // associations can be defined here
    Castle.belongsToMany(models.Tool,{
      through:'CastleTools'//join table for many to many relationship between castles and tools, so needs to be plural
    });
};
  return Castle;
};