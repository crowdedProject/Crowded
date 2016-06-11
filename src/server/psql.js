const Sequelize = require('sequelize');
const connection = require('./config/config.js');

const db = process.env.DATABASE_URL || connection.local;

var pg = new Sequelize(db);
pg
  .authenticate()
  .then(function(err) {
    console.log('connection successful');
  })
  .catch(function (err) {
    console.log('unable to connect to database:', err);
  });
  
let Cafe = pg.define('cafe', {
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