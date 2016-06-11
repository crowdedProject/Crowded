var Sequelize = require('sequelize');
var connection = 'postgres://localhost:8080/database';
//("postgres://" + process.env.PORT) || 
var pg = new Sequelize(connection);

pg
  .authenticate()
  .then(function(err) {
    console.log('connection successful');
  })
  .catch(function (err) {
    console.log('unable to connect to database:', err);
  });
  
  var Cafe = pg.define('cafe', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    }
  })

Cafe.sync().then(function() {
  var data = {
    name: "test cafe"
  }
  Cafe.create(data).then(function(post) {
    console.dir(post.get())
  })
})