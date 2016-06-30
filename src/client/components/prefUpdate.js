import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {updateData} from '../actions/cafe-db';
// import {bindActionCreators} from 'redux';
import {Link, browserHistory} from 'react-router';
import {postUpdateToDatabase} from '../actions/cafe-db'

class PrefUpdate extends Component {
  render() {
  const {fields: {cafeId, coffeeQuality, ambiance, rating, seats, outlets, bathroomQuality, crowded, noise, price},  handleSubmit} = this.props;
    return (
      <div>
      <div className="cafe-list-holder">
        <div className="small-print-button">
          <button type="submit " className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" onClick={() => browserHistory.push('/cafes')}>Update</button>
        </div>
        <div className="small-print-button">
          <button type="submit " className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" onClick={() => browserHistory.push('/cafes')}>Back to Cafes</button>
        </div>
        <form onSubmit={handleSubmit(this.props.updateData)}>
          <h1>{this.props.cafeId.name}</h1>
            <div className="form-group">
              <label>Cafe ID</label>
              <input type="numeber" className="form-control" value={this.props.cafeId.cafeId} min="1" max="500" {...cafeId} />
            </div>
          <h3>Update Availablity</h3>
          <div className="form-group">
            <label>Available Seats</label>
            <input type="number" className="form-control" value={this.props.cafeId.curr_seat} min="1" max="10"  {...seats}/>
          </div>

          <div className="form-group">
            <label>Number of Outlets</label>
            <input type="number" className="form-control" value={this.props.cafeId.outlet} min="1" max="10"  {...outlets}/>
          </div>

          <h3>Update Rating</h3>
          <div className="form-group">
            <label>Overall Rating</label>
            <input type="number" className="form-control" value={this.props.cafeId.rating} min="1" max="5" {...rating} />
          </div>

          <div className="form-group">
            <label>CoffeeQuality</label>
            <input type="number" className="form-control" value={this.props.cafeId.coffee_quality} min="1" max="5" {...coffeeQuality} />
          </div>

          <div className="form-group">
            <label>Ambiance</label>
            <input type="number" className="form-control" value={this.props.cafeId.ambiance} min="1" max="5" {...ambiance} />
          </div>

          <div className="form-group">
            <label>Bathroom Quality</label>
            <input type="number" className="form-control" value={this.props.cafeId.bathroomQuality} min="1" max="5" {...bathroomQuality} />
          </div>

          <div className="form-group">
            <label>Noise Level</label>
            <input type="number" className="form-control" value={this.props.cafeId.noise} min="1" max="5" {...noise} />
          </div>

          <div className="form-group">
            <label>How Crowded</label>
            <input type="number" className="form-control" value={this.props.cafeId.line_length} min="1" max="5" {...crowded} />
          </div>

          <div className="form-group">
            <label>Price Level</label>
            <input type="number" className="form-control" value={this.props.cafeId.price} min="1" max="5" {...price} />
          </div>   
          // <button type="submit" className="btn btn-primary">Update</button>
        </form>
      </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return({
    cafeList: state.cafe.cafeList,
    cafeId: state.cafe.cafeUpdated
  })
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({updateData}, dispatch);
// }

export default reduxForm({
  form: 'PrefUpdateForm',
  fields: ['cafeId', 'coffeeQuality', 'ambiance', 'rating', 'seats', 'outlets', 'bathroomQuality', 'crowded', 'noise', 'price']
}, mapStateToProps, {updateData})(PrefUpdate);