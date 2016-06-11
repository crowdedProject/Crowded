let Sequelize = require('sequelize');

let sequelize = new Sequelize('postgres://localhost:8080/database', {});

sequelize
  .authenticate()
  .then(function(err) {
    console.log('connection successful');
  })
  .catch(function (err) {
    console.log('unable to connect to database:', err);
  });