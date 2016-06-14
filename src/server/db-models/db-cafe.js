const Sequelize = require('sequelize');
const User = pg.import(`${__dirname}/db-user`);

module.exports = (db, DataTypes) => {
  return pg.define('cafe', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    },
    outlet: {
      type: DataTypes.INTEGER
    },
    total_seat: {
      type: DataTypes.INTEGER
    },
    curr_seat: {
      type: DataTypes.INTEGER
    },
    coffee_quality: {
      type: DataTypes.STRING
    },
    line_length: {
      type: DataTypes.INTEGER
    },
    noise: {
      type: DataTypes.INTEGER
    },
    address: {
      type: DataTypes.STRING
    },
    neighborhood: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.STRING
    },
    yelp_stars: {
      type: DataTypes.INTEGER
    },
    foreign_key: {
      type: DataTypes.INTEGER,
      model: global.pg.User,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  });
};