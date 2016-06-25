import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchData, updateData} from '../actions/cafe-db';
import {Link, browserHistory} from 'react-router';
import {Accordion, AccordionItem} from 'react-sanfona';
import {CafeField} from '../components/cafe-field';
import AccordionData from '../components/accordion';

class CafeList extends Component {
  constructor (props) {
    super(props);
    this.renderCafe = this.renderCafe.bind(this);
    // this.props.fetchData = this.props.fetchData.bind(this);
  }

  fetchCafeData(cafeId) {
    this.props.fetchData(cafeId);
  }

  updateCafeData(cafeId, columnHeader, newValue) {
    this.props.updateData(cafeId, columnHeader, newValue);
  }
  
  renderCafe(cafeData) {
    let searchPref = this.props.pref;

    let referenceObj = {
      proximity: 'Prox.',
      neighborhood: 'Neighborhood',
      coffeeQuality: 'Coffee',
      ambiance: 'Ambiance',
      rating: 'Rating',
      seats: 'Seats',
      outlets: 'Outlets',
      bathroomQuality: 'Bathrooms',
      line: 'Line',
      noise: 'Noise',
      price: 'Price'
   };

    return (
        <AccordionItem title={`${cafeData[0].name}           ${cafeData[0].curr_seat}`} key={cafeData[0].place_id}>
          <div>
            <div>Checkin to Update data</div>
            <div>Add cafe to favorites</div>
            <div>
              <AccordionData 
                cafeData={cafeData} 
                searchPref={searchPref}
                referenceObj={referenceObj} />
            </div>
          </div>
        </AccordionItem>
    );
 }

  render() {
    return (
      <div>
        <div className="div-holder">
          <div className="button-holder">
            <button type="submit " className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" id="button-image" src="src/client/assets/mdl-icons/undo.svg" onClick={() => browserHistory.push('/favorite')}>Favorites</button>
          </div>
          <div className="button-holder">
            <button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" onClick={() => browserHistory.push('/')}>Reset Preferences</button>
          </div>
        </div>
        <div className='cafe-list-holder'>
          <Accordion>
            {this.props.cafe.cafeList.map(this.renderCafe)}
          </Accordion>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return ({
    cafe: state.cafe,
    pref: state.pref.pref
  })
}

function mapDispachToProps(dispatch) {
  return bindActionCreators({fetchData, updateData}, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(CafeList);

