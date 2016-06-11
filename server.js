var express = require('express');
var bodyParser = require('body-parser');
var pg = require('./src/server/psql.js');
var app = express();

app.use(express.static(__dirname + '/dist'));                                                       
app.use(bodyParser.urlencoded({'extended':'true'}));          
app.use(bodyParser.json());                                     
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

var port = process.env.PORT || 8080;



app.listen(port, function() {
	console.log("server now running on localhost: " + port);
});
