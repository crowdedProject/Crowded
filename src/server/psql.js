"use strict";

const Sequelize = require('sequelize');
const connection = require('./config/db-connection.js');
const db = process.env.DATABASE_URL || connection.public;
const nData = require(`${__dirname}/neighborhood.json`);

if (!global.hasOwnProperty('pg')) {
  global.pg = (() => {
      return new Sequelize(db, {
        dialectOptions: {
        ssl: true
        }
      })
    })();
}

pg
  .authenticate()
  .then((err) => { console.log('connection successful');})
  .catch((err) => { console.log('unable to connect to database:', err);});
  
const User = pg.import(`${__dirname}/db-models/db-user`);
const Cafe = pg.import(`${__dirname}/db-models/db-cafe`);
const Neighborhood = pg.import(`${__dirname}/db-models/db-neighborhood`);
const Update = pg.import(`${__dirname}/db-models/db-update`);

pg.sync({force: false})
  .then(() => {
    let createHood = (obj) => {
      for (let key in obj) {
        Neighborhood.create({
          neighborhood_name: key,
          yelp_mapping: obj[key].join(', ')})
        .then()
        .catch((err) => { console.log(err);});
      }
    };
    createHood(nData);})
  .catch(function(err) {
    console.log('table not created', err);
  })
 
// create joins
User.belongsToMany(Cafe, {through: 'UserCafe', foreignKey: 'userId' });
Cafe.belongsToMany(User, {through: 'UserCafe', foreignKey: 'cafeId' });

User.belongsToMany(Update, {through: 'UserUpdate', foreignKey: 'userId' });
Update.belongsToMany(User, {through: 'UserUpdate', foreignKey: 'updateId' });

Cafe.belongsToMany(Update, {through: 'CafeUpdate', foreignKey: 'cafeId' });
Update.belongsToMany(Cafe, {through: 'CafeUpdate', foreignKey: 'updateId' });

Neighborhood.belongsToMany(Cafe, {through: 'NeighborhoodCafe'})
 
global.pgDatabase = {
  Sequelize,
  pg,
  User,
  Cafe,
  Neighborhood,
  Update
};

module.exports = pgDatabase;
