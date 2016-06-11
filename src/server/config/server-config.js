const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('./../../../dist'));
app.use(bodyParser.urlencoded({'extended':'true'}));          
app.use(bodyParser.json());                                     
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

module.exports = app;