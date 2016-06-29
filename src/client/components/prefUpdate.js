import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {updateData} from '../actions/cafe-db';
import {bindActionCreators} from 'redux';
import {Link, browserHistory} from 'react-router';

class PrefUpdate extends Component {
  render() {
  const {fields: {coffeeQuality, ambiance, rating, seats, outlets, bathroomQuality, crowded, noise, price},  handleSubmit} = this.props;
  console.log(seats);
  console.log('cafe Id!!', this.props.cafeId);
  console.log('cafe List!!!', this.props.cafeList);
    return (
      <form onSubmit={handleSubmit}>
        <h3>Update Availablity</h3>
        <div className="form-group">
          <label>Available Seats</label>
          <input type="number" className="form-control" name="seats" min="1" max="10" placeholder={this.props.cafeId.curr_seat} />
        </div>

        <div className="form-group">
          <label>Number of Outlets</label>
          <input type="number" className="form-control" name="outlets" min="1" max="10" placeholder={this.props.cafeId.outlet} />
        </div>

        <h3>Update Rating</h3>
        <div className="form-group">
          <label>Overall Rating</label>
          <input type="number" className="form-control" name="rating" min="1" max="5" placeholder={this.props.cafeId.rating} />
        </div>

        <div className="form-group">
          <label>CoffeeQuality</label>
          <input type="number" className="form-control" name="coffeeQuality" min="1" max="5" placeholder={this.props.cafeId.coffee_quality} />
        </div>

        <div className="form-group">
          <label>Ambiance</label>
          <input type="number" className="form-control" name="ambiance" min="1" max="5" placeholder={this.props.cafeId.ambiance} />
        </div>

        <div className="form-group">
          <label>Bathroom Quality</label>
          <input type="number" className="form-control" name="bathroomQuality" min="1" max="5" placeholder={this.props.cafeId.bathroomQuality} />
        </div>

        <div className="form-group">
          <label>Noise Level</label>
          <input type="number" className="form-control" name="noise" min="1" max="5" placeholder={this.props.cafeId.noise} />
        </div>

        <div className="form-group">
          <label>How Crowded</label>
          <input type="number" className="form-control" name="crowded" min="1" max="5" placeholder={this.props.cafeId.line_length} />
        </div>

        <div className="form-group">
          <label>Price Level</label>
          <input type="number" className="form-control" name="price" min="1" max="5" placeholder={this.props.cafeId.price} />
        </div>

        <button type="submit" className="btn btn-primary">Update</button>
      </form>
      
    );
  }
}

function mapStateToProps(state) {
  return({
    cafeList: state.cafe.cafeList,
    cafeId: state.cafe.cafeUpdated
  })
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({updateData}, dispatch);
}

export default reduxForm({
  form: 'PrefUpdateForm',
  fields: ['coffeeQuality', 'ambiance', 'rating', 'seats', 'outlets', 'bathroomQuality', 'crowded', 'noise', 'price']
}, mapStateToProps, mapDispatchToProps)(PrefUpdate);