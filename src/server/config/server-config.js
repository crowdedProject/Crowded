"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(`${__dirname}./../../../dist`));
app.use(bodyParser.urlencoded({'extended':'true'}));          
app.use(bodyParser.json());                                     

module.exports = app;