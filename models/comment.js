const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    comment:{
      type:DataTypes.STRING,
      allowNull: false
    },
    date:{
        type:DataTypes.DATE
    },
    name:{
      type: DataTypes.STRING, 
      foreignKey: true,
      references: 'Writer',
      referencesKey: 'name' 
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog',
  }
);

module.exports = Comment;
