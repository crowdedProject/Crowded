import React from 'react';

export default (props) => {
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