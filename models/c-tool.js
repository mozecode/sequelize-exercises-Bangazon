'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tool = sequelize.define('Tool', {
    name: DataTypes.STRING,
    color: DataTypes.STRING,
    createdAt: null,
    updatedAt: null
  });

Tool.associate = (models) => {
        // associations can be defined here
  Tool.belongsToMany(models.Castle, {
    through: 'CastleTools'  //plural intentionally
  });
};
  return Tool;
};