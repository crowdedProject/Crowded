let Sequelize = require('sequelize');
let connection = process.env.DATABASE_URL || 'postgres://localhost:8080/database';
let sequelize = new Sequelize(connection, {});

sequelize
  .authenticate()
  .then(function(err) {
    console.log('connection successful');
  })
  .catch(function (err) {
    console.log('unable to connect to database:', err);
  });