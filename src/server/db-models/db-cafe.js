const Sequelize = require('sequelize');
const User = pg.import(`${__dirname}/db-user`);

module.exports = (db, DataTypes) => {
  return pg.define('cafe', {
    cafeId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    },
    outlet: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    total_seat: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    curr_seat: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    coffee_quality: {
      type: DataTypes.STRING,
      allowNull: true
    },
    line_length: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    noise: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    neighborhood: {
      type: DataTypes.STRING,
      allowNull: true
    },
    price: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    place_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    foreign_key: {
      type: DataTypes.INTEGER,
      model: global.pg.User,
      key: 'userId',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  });
};