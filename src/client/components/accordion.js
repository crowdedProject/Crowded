import React from 'react';

const AccordionData = ({cafeData, searchPref, referenceObj}) => {
    let preferenceData = {
      proximity: null,
      neighborhood: null,
      coffeeQuality: cafeData[0].coffee_quality,
      ambiance: null,
      rating: cafeData[0].rating,
      seats: cafeData[0].curr_seat,
      outlets: cafeData[0].outlet,
      bathroomQuality: null,
      line: cafeData[0].line_length,
      noise: cafeData[0].noise,
      price: cafeData[0].price    
    };
    let placeId = cafeData[0].place_id;
    // let name = cafeData[0].name;
    // let totalSeats = cafeData[0].total_seat;
    // let ambiance = null;
    // let bathroomQuality = null;

  let spanArray = [];
  for (let pref in searchPref) {
    if (searchPref[pref] === true && pref !== 'proximity') {
      spanArray.push(
        <div className="mdl-cell mdl-cell--1-col unclicked" key={pref}>
          <div>{referenceObj[pref]}</div>
          <div id="pref-number">{preferenceData[pref]}</div>
        </div>);
    }
  }
  
  return (
    <div className="mdl-grid small">
      {spanArray}
    </div>
  );
};

export default AccordionData;