import React from 'react';

const AccordionData = ({cafeData, searchPref, referenceObj}) => {
    let preferenceData = {
      proximity: null,
      neighborhood: null,
      coffeeQuality: cafeData[0].coffee_quality,
      ambiance: null,
      rating: cafeData[0].rating,
      //How do we want to display seats?
      seats: cafeData[0].total_seat,
      outlets: cafeData[0].outlet,
      bathroomQuality: null,
      line: cafeData[0].line_length,
      noise: cafeData[0].noise,
      price: cafeData[0].price    
    };
    // let placeId = cafeData[0].place_id;
    // let name = cafeData[0].name;
    // let totalSeats = cafeData[0].total_seat;
    // let ambiance = null;
    // let bathroomQuality = null;




  console.log('rating: ', cafeData);
  console.log('searchPref: ', searchPref)
  let spanArray = [];
  for (let pref in searchPref) {
    if (searchPref[pref] === true) {
      console.log('REF: ', referenceObj);
      console.log('searchPref: ', pref);
      spanArray.push(<span>{referenceObj[pref]}{preferenceData[pref]}</span>);
    }
  }
  
  


  return (
    <div>
      {spanArray}
    </div>
  );
};

export default AccordionData;