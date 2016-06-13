import React from 'react';

import Cafe from './cafe';

const CafeList = (props) => {
  //Dummy array is assigned to props since 
  //it's not yet integrated with server.
  
  //sort the props by yelp rating, descending;
  //SORT will be a function of user preferences.
  props = props.sort((cafe1, cafe2) => {
    return cafe2.rating - cafe1.rating;
  });

  const cafeArr = props.map((cafe) => {
    return (
      <Cafe
        key={cafe.name}
        cafe={cafe} />
    );
  });
  
  return (
    <ul>
      {cafeArr}
    </ul>
  );
};

export default CafeList;