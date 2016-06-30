import React from 'react';

const AccordionData = ({cafeData, searchPref, referenceObj}) => {
    let preferenceData = {
      proximity: null,
      neighborhood: null,
      coffeeQuality: cafeData[0].coffee_quality || 'N/A',
      ambiance: null || 'N/A',
      rating: cafeData[0].rating || 'N/A',
      seats: cafeData[0].curr_seat || 'N/A',
      outlets: cafeData[0].outlet || 'N/A',
      bathroomQuality: null || 'N/A',
      line: cafeData[0].line_length || 'N/A',
      noise: cafeData[0].noise || 'N/A',
      price: cafeData[0].price  || 'N/A'   
    };
    let placeId = cafeData[0].place_id;

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