import axios from 'axios';

const API_KEY = '';
const ROOT_URL = 'https://api.yelp.com/v2/search?term=coffee&location=San+Francisco'

export const YELP_RATING = 'YELP_RATING';

const Yelp = require('yelp');
// const lat = 37.764269;
// var lng = -122.427380;

//define this function properly:
export function yelpRating(neighborhood) {
  const url = `${ROOT_URL}+${neighborhood}&limit=5&radius_filter=3000`;
  const request = axios.get(url);

//key is to return out the response from the yelp call as the value for the payload key
  return {
    type: YELP_RATING,
    payload: request
  }
};


// const yelp = new Yelp({
//   consumer_key:'HHefGn0kJ5awiDBZ91h0fQ',
//   consumer_secret:'KjUfxOf9fXDssN7kNN15chRkYkQ',
//   token:'Ode_R9doG9DcWq0NTnjcV2-T9DrAgdlh',
//   token_secret:'RTzo4mW0y2yDIu3c32R6E8Qcx9k'
// });

// module.exports.yelpResult = (term, res) => {
//   yelp.search({ term: 'coffee', location: 'san francisco ' + term, limit: 5, radius_filter: 3000 })
// 	.then( (data) => {
// 	  res.send(data);
// 	})
// 	.catch( (err) => {
// 	  console.error("WE HAD AN ERROR", err);
// 	});
// };

// cafeListFetch (term) {
//     Axios.post('/cafeResult', term)
//       .then(response => {
//         let sortedResp = response.data.businesses.sort((cafe1, cafe2) => {
//           return cafe2.rating - cafe1.rating;
//         });
//         let cafeArr = sortedResp.map((cafe) => {
//           return (
//             <Cafe
//               key={cafe.name}
//               cafe={cafe} />
//           );
//         });
//         this.setState({ cafeArr: cafeArr });
//       })
//       .catch(err => {
//         console.error(err);
//       });
//   }
