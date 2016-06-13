import React from 'react';

const Cafe = (props) => {
  return (
    <div>
      <div>
        Cafe Name: {props.cafe.name}
      </div>
      <div>
        Cafe Rating: {props.cafe.rating}
      </div>
    </div>
  );
};

export default Cafe;