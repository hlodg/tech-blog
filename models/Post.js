const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    title:{
      type:DataTypes.STRING,
      allowNull: false
    },
    description:{
      type:DataTypes.STRING,
      allwoNull:false
    },
    writer_id:{
      type: DataTypes.INTEGER, 
      foreignKey: true,
      references: {model: 'writer', 
      key:'id'}
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;
