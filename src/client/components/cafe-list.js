import React from 'react';

import Cafe from './cafe';

const CafeList = (props) => {
  //Dummy array is assigned to props since 
  //it's not yet integrated with server.
  props = [0, 1, 2, 3, 4];
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