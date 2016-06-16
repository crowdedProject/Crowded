const app = require('./config/server-config.js');
// const Yelp = require('../client/yelpApiCall/yelpSearch');
const sequelize = require(`${__dirname}/psql.js`);

let port = process.env.PORT || 8080;

app.listen(port, function() {
		console.log("server listening on port " + port);
	});

app.post('/cafeResult', (req, res) => {
	// console.log('serverPOST');
	Yelp.yelpResult(req, res);
});

app.post('/signup', function(req, res) {
		let first_name = req.body.firstName;
		let last_name = req.body.firstName;
  	let email = req.body.email;
		//check if email exists in db
			//if it does, return err
			//else create db entry
				//route to logged in home screen
		console.log('this is a console log', global.pg.User);
});

app.post('/login', function(req, res) {
		let first_name = req.body.firstName;
		let last_name = req.body.firstName;
  	let email = req.body.email;
		
		console.log('this is a console log', global.pg.User);
});

app.post('/cafeResult/seat', function(req, res) {
		let total_seat = req.body.totalSeat;
		let curr_seat = req.body.currSeat;
		
		console.log('this is a console log', global.pg.Cafe);
});

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

//   res.send('SERVER POST: ', name, email);
// });