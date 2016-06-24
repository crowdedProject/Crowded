"use strict";

const Sequelize = require('sequelize');

module.exports = (pg, DataTypes) => {
  return pg.define('user', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true
    },
    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    current_location: {
      type: DataTypes.STRING
    }
  });
};