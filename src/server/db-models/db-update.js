const Sequelize = require('sequelize');
const User = pg.import(`${__dirname}/db-user`);
const Cafe = pg.import(`${__dirname}/db-cafe`);

module.exports = (pg, DataTypes) => {
  return pg.define('update', {
    updateId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    place_id: {
      type: DataTypes.STRING      
    },
    update_field: {
      type: DataTypes.STRING      
    },
    update_value: {
      type: DataTypes.INTEGER
    },
    foreign_key: {
      type: DataTypes.INTEGER,
      model: global.pg.Cafe,
      key: 'cafeId',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    },
    foreign_key: {
      type: DataTypes.INTEGER,
      model: global.pg.User,
      key: 'userId',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  }); 
};