"use strict";

const axios = require('axios');
const app = require('./config/server-config.js');
const path = require('path');
const pgDatabase = require('./psql.js');

let port = process.env.PORT || 8080;

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
	let cafeArray = [];
	let promiseArray = [];
	for (let i=0; i<request.length; i++) {
		let name = request[i].name;
		let rating = request[i].rating;
		let price = request[i].price_level;
		let place_id = request[i].place_id;
		let coordLat = request[i].geometry.location.lat;
		let coordLng = request[i].geometry.location.lng;
		let address = request[i].vicinity;
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
					place_id,
					address,
					coordLat,
					coordLng
				}, 
				transaction: t
			});
			})
		);
	}
	
	Promise.all(promiseArray).then((array) => {
		res.send(array);
	})
});

app.post('/fetchCafeData', function(req, res) {
	let place_id = req.body.cafeId;
	return pgDatabase.Cafe.findOne({
		where: {place_id}
	})
	.then((rowData) => res.send(rowData))
	.catch((err) => console.error(err))
});

app.post('/fetchJoin', function(req, res) {
	let email = req.body.email
	return pgDatabase.User.findOne({
		where: {email}
	})
	.then((rowData) => {
		console.log('this is a user', rowData)
		let userId = rowData.userId;
		return pgDatabase.User.findAll({ where: {userId}, include: [pgDatabase.Cafe]});
	})
	.then((joinData) => {
		console.log('this is the join data', joinData);
		res.send(joinData);
	})
	.catch((err) => console.error(err))
});

app.post('/updateCafeData', function(req, res) {
	let cafeId = req.body.cafeId;
	let coffee_quality = req.body.coffeeQuality;
	let ambiance = req.body.ambiance;
	let rating = req.body.rating;
	let curr_seat = req.body.seats;
	let outlet = req.body.outlets;
	let bathroomQuality = req.body.bathroomQuality;
	let line_length = req.body.crowded
	let noise = req.body.noise;
	let price = req.body.price;
	pgDatabase.Cafe.update({
			coffee_quality,
			ambiance,
			rating,
			curr_seat,
			outlet,
			bathroomQuality,
			line_length,
			noise,
			price
  },
  {where: {cafeId}})
  .then(() => { 
		return console.log('cafe updated successfully');
  })
  .error((err) => {
		return console.error(err);
  });
});

app.post('/addFavorite', function(req, res) {
	let email = req.body.userEmail;
	let place_id = req.body.cafeId;

	return pgDatabase.pg.transaction(function(t) {
		return pgDatabase.User.find({
		where: {email}
		}, {transaction: t})
		.then((user) => {
			return pgDatabase.Cafe.find({
				where: {place_id}
			}, {transaction: t})
			.then((cafe) => {
				return user.addCafe(cafe)
			})
		})
	})
	.then((cafe) => {
		res.send(place_id);
	})
	.catch((err) => console.error(err))
});

app.post('/deleteFavorite', function(req, res) {
	let email = req.body.userEmail;
	let place_id = req.body.cafeId;

	return pgDatabase.pg.transaction(function(t) {
		return pgDatabase.User.find({
		where: {email}
		}, {transaction: t})
		.then((user) => {
			return pgDatabase.Cafe.find({
				where: {place_id}
			}, {transaction: t})
			.then((cafe) => {
				return user.removeCafe(cafe)
			})
		})
	})
	.then((cafe) => {
		res.send(place_id);
	})
	.catch((err) => console.error(err))
});

app.post('/addUser', function(req, res) {
	console.log('add user endpoint', req.body.email);
	let email = req.body.email;
	let first_name = req.body.given_name;
	let last_name = req.body.family_name;

	return pgDatabase.User.findOrCreate({
		where: {email},
		defaults: {
			email,
			first_name,
			last_name
		}
	})
	.then((row) => res.send(req.body))
	.catch((err) => console.error(err))
});


app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, '../../dist/index.html'))
})

app.listen(port, function() {
		console.log("server listening on port " + port);
	});
