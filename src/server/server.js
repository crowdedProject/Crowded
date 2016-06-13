const app = require('./config/server-config.js');
const Yelp = require('../client/yelpApiCall/yelpSearch');


let port = process.env.PORT || 8080;

app.listen(port, function() {
	console.log("server listening on port " + port);
});

app.post('/cafeResult', (req, res) => {
	// console.log('serverPOST');
	Yelp.yelpResult(req, res);
});