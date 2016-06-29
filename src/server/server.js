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
	// console.log('this is req.body', req.body);
	return pgDatabase.Cafe.findOne({
		where: {place_id}
	})
	.then((rowData) => res.send(rowData))
	.catch((err) => console.error(err))
});

app.post('/fetchJoin', function(req, res) {
	let email = req.body.email
	// console.log('this is req.body', req.body);
	return pgDatabase.User.findOne({
		where: {email}
	})
	.then((rowData) => {
		let user_id = rowData.user_id;
		pgDatabase.UserCafe.findAll({
			where: {user_id}
		});
	}).then((joinData) => res.send(joinData))
	.catch((err) => console.error(err))
});

app.post('/updateCafeData', function(req, res) {
	let place_id = req.body.cafeId;
	let coffee_quality = req.body.coffeeQuality;
	let ambiance = req.body.ambiance;
	let rating = req.body.rating;
	let curr_seat = req.body.seats;
	let outlet = req.body.outlets;
	// let field = req.body.bathroomQuality;
	// let field = req.body.crowded
	// let field = req.body.noise;
	// let field = req.body.price;
	// let foreign_key;
	
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

app.post('/addFavorite', function(req, res) {
	// let email = req.body.userEmail;
	let email = 'ian.c.stinson@gmail.com';
	let place_id = req.body.cafeId;
// return pgDatabase.pg.transaction(function(t) {
// 	return pgDatabase.User.find({ 
// 		where: {email} 
// 	}, {transaction: t})
// })
// 	.then((user) => {
// 		console.log('this gets to user', user);
//   	return pgDatabase.pg.transaction(function(t) {
// 			return pgDatabase.Cafe.find({
// 			where: {place_id}
// 		}, {transaction: t})
// 		})
// 		.then((cafe) => {
// 		console.log('this gets to cafe', cafe);
//     	user.setCafes([cafe]);
//   });      
// });
	return pgDatabase.pg.transaction(function(t) {
		return pgDatabase.User.find({
		where: {email}
		}, {transaction: t})
		.then((user) => {
			let localUser = user;
			console.log('this is a user', user);
			return pgDatabase.Cafe.find({
				where: {place_id}
			}, {transaction: t})
			.then((cafe) => {
				console.log('this is a cafe', cafe);
				return localUser.setCafe(
					[cafe], {transaction: t}
					);
			})
		})
	})
	.then((cafe) => {
		res.send(cafe);
	})
	.catch((err) => console.error(err))
});

// pgDatabase.pg.transaction(function (t) {
// 			return pgDatabase.Cafe.findOrCreate({
// 				where: {
// 					place_id
// 				},
// 				defaults: {
// 					name,
// 					price,
// 					rating,
// 					place_id,
// 					address,
// 					coordLat,
// 					coordLng
// 				}, 
// 				transaction: t
// 			});

app.post('/deleteFavorite', function(req, res) {
	let user_id = req.body.userId;
	let place_id = req.body.cafeId;
	return pgDatabase.Cafe.findOne({
		where: {place_id}
	})
	.then((rowData) => res.send(rowData))
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
