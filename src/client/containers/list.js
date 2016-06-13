import React from 'react';
import Axios from 'axios';

import CafeList from '../components/cafe-list';
import HoodList from '../components/hood-list';
import PrefList from '../components/pref-list';

//Here we are going to use 
//cafe-list, hood-list, and pref-list
//depending on which state we're at.

//Initially, we will export PrefList 
//to demonstrate that the files still work.
const cafeListTest = (term) => {
	// console.log('in test function', term);
	Axios.post('/cafeResult', term)
	.then(response => {
		console.log('cafe result starts here', response.data);
	})
	.catch(err => {
		console.error(err);
	});
};
cafeListTest('coffee');
export default CafeList;