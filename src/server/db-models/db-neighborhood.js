const Sequelize = require('sequelize');

module.exports = function (pg, DataTypes) {
  return pg.define('neighborhood', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    neighborhood_name: {
      type: DataTypes.STRING,
    }
  });
};