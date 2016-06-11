//I may want to make this a container
//instead of a component.
import React from 'react';

import Cafe from './cafe';

const CafeList = (props) => {
  //DummyArray in place of props
  //since it's not yet functional
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
