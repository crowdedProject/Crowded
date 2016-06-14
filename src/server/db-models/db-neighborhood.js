const Sequelize = require('sequelize');
const nData = require(`${__dirname}/../neighborhood.json`);

module.exports = (pg, DataTypes) => {
  return pg.define('neighborhood', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    neighborhood_name: {
      type: DataTypes.STRING      
    },
    yelp_mapping: {
      type: DataTypes.STRING
    }
  });
  
};