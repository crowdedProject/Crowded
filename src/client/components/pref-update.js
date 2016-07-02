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
        <div className="div-holder-cafe">
          <div className="small-print-button">
           <button type="submit " className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" onClick={() => browserHistory.push('/cafes')}>Back to Cafes</button>
          </div>
        </div>
      <div className="mdl-grid">
        <div className="mdl-cell white mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone">
        <form onSubmit={handleSubmit(this.props.updateData)}>
          <h1>{this.props.cafeId.name}</h1>
            <div className="form-group">
              <label>Cafe ID</label>
              <input type="numeber" className="form-control" value={this.props.cafeId.cafeId} min="1" max="500" {...cafeId} />
            </div>
          <h3>Update Availablity</h3>
          <div>
          <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--2-col-phone">
            <div className="form-group">
              <label>Available Seats</label>
            </div>
            <div className="form-group">
              <label>Number of Outlets</label>
            </div>
          </div>
          <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--2-col-phone">
            <div>
              <input type="number" className="form-control" value={this.props.cafeId.curr_seat} min="1" max="10"  {...seats}/>
              <input type="number" className="form-control" value={this.props.cafeId.outlet} min="1" max="10"  {...outlets}/>
            </div>
          </div>
          </div>

          <h3>Update Rating</h3>
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--2-col-phone">
            <div className="form-group">
              <label>Overall Rating</label>
            </div>
            <div className="form-group">
              <label>CoffeeQuality</label>
            </div>
            <div className="form-group">
              <label>Ambiance</label>
            </div>
            <div className="form-group">
              <label>Bathroom Quality</label>
            </div>
            <div className="form-group">
              <label>Noise Level</label>
            </div>
            <div className="form-group">
              <label>How Crowded</label>
            </div>
            <div className="form-group">
              <label>Price Level</label>
            </div>
            </div>
          </div>
          <div>
            <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--2-col-phone">
              <div>
              <input type="number" className="form-control" value={this.props.cafeId.rating} min="1" max="5" {...rating} />
              <input type="number" className="form-control" value={this.props.cafeId.coffee_quality} min="1" max="5" {...coffeeQuality} />
              <input type="number" className="form-control" value={this.props.cafeId.ambiance} min="1" max="5" {...ambiance} />
              <input type="number" className="form-control" value={this.props.cafeId.bathroomQuality} min="1" max="5" {...bathroomQuality} />
              <input type="number" className="form-control" value={this.props.cafeId.noise} min="1" max="5" {...noise} />
              <input type="number" className="form-control" value={this.props.cafeId.line_length} min="1" max="5" {...crowded} />
              <input type="number" className="form-control" value={this.props.cafeId.price} min="1" max="5" {...price} />
              </div>
            </div>
          </div>
        
          <button type="submit" onClick={() => browserHistory.push('/cafes')} className="btn btn-primary">Update</button>
        </form>
        </div>
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

export default reduxForm({
  form: 'PrefUpdateForm',
  fields: ['cafeId', 'coffeeQuality', 'ambiance', 'rating', 'seats', 'outlets', 'bathroomQuality', 'crowded', 'noise', 'price']
}, mapStateToProps, {updateData})(PrefUpdate);