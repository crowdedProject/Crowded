"use strict";

const express = require('express');
const bodyParser = require('body-parser');
// const cafeRoutes = require('../routes/route-cafe');

const app = express();

app.use(express.static(`${__dirname}./../../../dist`));
app.use(bodyParser.urlencoded({'extended':'true'}));          
app.use(bodyParser.json());                                     
// app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// app.use('/cafes', cafeRoutes);

module.exports = app;