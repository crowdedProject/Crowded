var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// var connection = require('./src/server/config.js');
// var Sequelize = require('sequelize');

app.use(express.static(__dirname + '/dist'));                                                       
app.use(bodyParser.urlencoded({'extended':'true'}));          
app.use(bodyParser.json());                                     
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

var port = process.env.PORT || 8080;

app.listen(port, function() {
	console.log("server now running on localhost: " + port);
});
