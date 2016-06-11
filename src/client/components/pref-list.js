import React from 'react';

import Pref from './pref';

const PrefList = (props) => {
  //Dummy array is assigned to props since 
  //it's not yet integrated with server.
  props = [1, 2, 3, 4, 5, 6];
  const prefArr = props.map((pref) => {
    return (
      <Pref
        key={pref}
        pref={pref} />
    );
  });
  //reformat as table
  return (
    <ul>
      {prefArr}
    </ul>
  );
};

export default PrefList;