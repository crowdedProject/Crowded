//This will become a container
//once redux comes in to play
import React from 'react';

import Cafe from './cafe';

//Add REDUX to determine whether we render
//Neighborhoods, Preferences, or Cafes

const CafeList = (props) => {
  //Dummy array is assigned to props since 
  //it's not yet integrated with server.
  props = [1, 2, 3, 4, 5];
  const cafeArr = props.map((cafe) => {
    return (
      <Cafe
        key={cafe}
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
