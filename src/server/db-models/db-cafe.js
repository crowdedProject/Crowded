const Sequelize = require('sequelize');
const User = pg.import(__dirname + '/db-user');

module.exports = function (db, DataTypes) {
  return pg.define('cafe', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    },
    foreign_key: {
      type: DataTypes.INTEGER,
      model: global.pg.User,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  });
};