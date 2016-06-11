import React from 'react';

import Hood from './hood';

const HoodList = (props) => {
  //Dummy array is assigned to props since 
  //it's not yet integrated with server.
  props = [1, 2, 3, 4, 5];
  const hoodArr = props.map((hood) => {
    return (
      <Hood
        key={hood}
        hood={hood} />
    );
  });
  //reformat as table
  return (
    <ul>
      {hoodArr}
    </ul>
  );
};

export default HoodList;