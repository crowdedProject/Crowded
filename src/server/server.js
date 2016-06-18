const axios = require('axios');
const app = require('./config/server-config.js');
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
	for (let i=0; i<request.length; i++) {
		let name = request[i].name;
		let rating = request[i].rating;
		let price = request[i].price_level;
		let place_id = request[i].place_id;
	
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
		.then(()=> res.send(req.body.data))
		.catch((err) => console.error(err))
	}
});

app.get('/seats', function(req, res) {
	return pgDatabase.Cafe.findOne({
		where: {place_id}
	})
	.then((rowData) => res.send(rowData))
	.catch((err) => console.error(err))
});

// app.get('*', function(req, res) {
//   res.sendFile(__dirname + '/index.html');
// });

// console.log('this is a neighborhood', global.pg.Neighborhood.all());

// app.post('/signup', function(req,res) {
//   let name = req.body.name;
//   let email = req.body.email;

// 	new User({ email: email }).fetch().then(found => {
//     if (found) {
//    		console.log("already in database!");
//     }
//     else {
//     	console.log("NOT FOUND! ADDED!");
// 		  let testUser = new User({
// 			  fullname: name,
// 			  email: email
// 		  });

// 			testUser.save().then(newUser => {
// 				Users.add(newUser);
// 			});
//     }
// 	});

app.listen(port, function() {
		console.log("server listening on port " + port);
	});
