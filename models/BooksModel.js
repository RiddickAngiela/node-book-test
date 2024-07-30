const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Book', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    publishedDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'Books',
    timestamps: true
  });
};
