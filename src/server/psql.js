const Sequelize = require('sequelize');
const connection = require('./config/db-connection.js');
const db = process.env.DATABASE_URL || connection.local;
const nData = require(`${__dirname}/neighborhood.json`);

if (!global.hasOwnProperty('pg')) {
  pg = (() => {
    if (db === process.env.DATABASE_URL) {
      return new Sequelize(db, {
        dialectOptions: {
        ssl: true
        }
      })
    } else {
      return new Sequelize(db);
    }
  })();
}

pg
  .authenticate()
  .then((err) => { console.log('connection successful');})
  .catch((err) => { console.log('unable to connect to database:', err);});
  
const User = pg.import(`${__dirname}/db-models/db-user`);
const Cafe = pg.import(`${__dirname}/db-models/db-cafe`);
const Neighborhood = pg.import(`${__dirname}/db-models/db-neighborhood`);

pg.sync({force: true})
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
 
 Cafe.hasMany(User, {as: 'Users'});
 User.belongsToMany(Cafe, {through: 'UserCafe'});
 Neighborhood.belongsToMany(Cafe, {through: 'NeighborhoodCafe'})

global.pg = {
  Sequelize,
  pg,
  User,
  Cafe,
  Neighborhood
};

module.exports = global.pg;
