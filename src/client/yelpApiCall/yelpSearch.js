const Yelp = require('yelp');
// const lat = 37.764269;
// var lng = -122.427380;

const yelp = new Yelp({
  consumer_key:'HHefGn0kJ5awiDBZ91h0fQ',
  consumer_secret:'KjUfxOf9fXDssN7kNN15chRkYkQ',
  token:'Ode_R9doG9DcWq0NTnjcV2-T9DrAgdlh',
  token_secret:'RTzo4mW0y2yDIu3c32R6E8Qcx9k'
});

module.exports.yelpResult = (term, res) => {
	yelp.search({ term: 'coffee', location: 'san francisco ' + term, limit: 5, radius_filter: 3000 })
	.then( (data) => {
	  res.send(data);
	})
	.catch( (err) => {
	  console.error("WE HAD AN ERROR", err);
	});
};

