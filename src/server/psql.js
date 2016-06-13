const Sequelize = require('sequelize');
const connection = require('./config/db-connection.js');
const db = process.env.DATABASE_URL || connection.local;

if (!global.hasOwnProperty('pg')) {
  pg = (function() {
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
  .then(function(err) {
    console.log('connection successful');
  })
  .catch(function (err) {
    console.log('unable to connect to database:', err);
  });
  
const User = pg.import(__dirname + '/db-models/db-user');
const Cafe = pg.import(__dirname + '/db-models/db-cafe');
const Neighborhood = pg.import(__dirname + '/db-models/db-neighborhood');

pg.sync({force: true}).then(function(data) {
  console.log('table', data.models);})
  .catch(function(err) {
    console.log('table not created', err);
  })

global.pg = {
  Sequelize: Sequelize,
  pg: pg,
  User: User,
  Cafe: Cafe,
  Neighborhood: Neighborhood
};
