"use strict";

const axios = require('axios');
const app = require('./config/server-config.js');
const path = require('path');
// const Yelp = require('../client/yelpApiCall/yelpSearch');
const pgDatabase = require('./psql.js');

let port = process.env.PORT || 8080;

app.post('/signup', function(req, res) {
	//placeholder
});

app.post('/login', function(req, res) {
	//placeholder
});

app.post('/cafeResult/seat', function(req, res) {
	//placeholder
});

app.post('/cafeResult', function(req, res) {
  const API_KEY = 'AIzaSyDkRyt36Yj2FYAiJklN810C_UWN8GF6gD0';
  const ROOT_URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?radius=2000&type=cafe&key=${API_KEY}
`
	const url = `${ROOT_URL}&location=${req.body.data}&keyword=coffee%20tea`;

  axios.get(url)
    .then(  Response => {
      res.send(Response.data.results);
    })
    .catch( (err) => {
      console.error(err)
  });
});

app.post('/cafeDatabase', function(req, res) {
	let request = req.body.data; 
	let cafeArray = []; //send this back as one res send
	let promiseArray = [];
	for (let i=0; i<request.length; i++) {
		let name = request[i].name;
		let rating = request[i].rating;
		let price = request[i].price_level;
		let place_id = request[i].place_id;
	
		promiseArray.push(
			pgDatabase.pg.transaction(function (t) {
			return pgDatabase.Cafe.findOrCreate({
				where: {
					place_id
				},
				defaults: {
					name,
					price,
					rating,
					place_id
				}, 
				transaction: t
			});
			})
		);
	}
	
	Promise.all(promiseArray).then((array) => {
		console.log('this is resolve array', array);
		res.send(array);
	})
});

app.post('/fetchCafeData', function(req, res) {
	let place_id = req.body.cafeId;
	// console.log('this is req.body', req.body);
	return pgDatabase.Cafe.findOne({
		where: {place_id}
	})
	.then((rowData) => res.send(rowData))
	.catch((err) => console.error(err))
});

app.post('/updateCafeData', function(req, res) {
	let place_id = req.body.cafeId;
	let field = req.body.field;
	let value = req.body.value;
	let foreign_key;
	
	return pgDatabase.Cafe.findOne({
		where: {place_id}
	})
	.then((cafe) => {
		foreign_key = cafe[foreign_key];
		cafe.update({
			field: value
		}).then( () => { return pgDatabase.Update.create({ 
			place_id,
			update_field: field,
			update_value: value,
			foreign_key
			})
		.catch((err) => console.error(err))
		})
	})
	.then(() => res.send(console.log("Database entry successfully updated!")))
	.catch((err) => console.error(err))
});

//update so that it deletes!!
app.post('/deleteFavorite', function(req, res) {
	let user_id = req.body.userId;
	let place_id = req.body.cafeId;
	return pgDatabase.Cafe.findOne({
		where: {place_id}
	})
	.then((rowData) => res.send(rowData))
	.catch((err) => console.error(err))
});

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, '../../dist/index.html'))
})

app.listen(port, function() {
		console.log("server listening on port " + port);
	});
