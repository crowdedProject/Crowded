import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {updateData} from '../actions/cafe-db';
// import {bindActionCreators} from 'redux';
import {Link, browserHistory} from 'react-router';
import {postUpdateToDatabase} from '../actions/cafe-db'

class PrefUpdate extends Component {
  onSubmit(prop) {
    this.props.updateData(prop);
    setTimeout(function() {
      browserHistory.push('/cafes');
    }.bind(this), 500);
  }
  onCancel() {
    browserHistory.push('/cafes');
  }
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
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <h1 className="bold">{this.props.cafeId.name}</h1>
            <div className="form-group">
                <label className="label-width">Cafe ID</label>
                <input type="number" className="form-control" value={this.props.cafeId.cafeId} min="1" max="500" {...cafeId} />
            </div>
          <div className="form-headers">Update Availability</div>
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--2-col-phone">
              <div className="form-group">
                <label className="label-width">Available Seats</label>
                <input type="number" className="form-control" value={this.props.cafeId.curr_seat} min="1" max="10"  {...seats}/>
              </div>
              <div className="form-group">
                <label className="label-width">Number of Outlets</label>
                <input type="number" className="form-control" value={this.props.cafeId.outlet} min="1" max="10"  {...outlets}/>
              </div>
            </div>
          </div>

          <div className="form-headers">Update Rating</div>
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--2-col-phone">
              <div className="form-group">
                <label className="label-width">Overall Rating</label>
                <input type="number" className="form-control" value={this.props.cafeId.rating} min="1" max="5" {...rating} />
              </div>
              <div className="form-group">
                <label className="label-width">CoffeeQuality</label>
                <input type="number" className="form-control" value={this.props.cafeId.coffee_quality} min="1" max="5" {...coffeeQuality} />
              </div>
              <div className="form-group">
                <label className="label-width">Ambiance</label>
                <input type="number" className="form-control" value={this.props.cafeId.ambiance} min="1" max="5" {...ambiance} />
              </div>
              <div className="form-group">
                <label className="label-width">Bathroom Quality</label>
                <input type="number" className="form-control" value={this.props.cafeId.bathroomQuality} min="1" max="5" {...bathroomQuality} />
              </div>
              <div className="form-group">
                <label className="label-width">Noise Level</label>
                <input type="number" className="form-control" value={this.props.cafeId.noise} min="1" max="5" {...noise} />
              </div>
              <div className="form-group">
                <label className="label-width">How Crowded</label>
                <input type="number" className="form-control" value={this.props.cafeId.line_length} min="1" max="5" {...crowded} />
              </div>
              <div className="form-group">
                <label className="label-width">Price Level</label>
                <input type="number" className="form-control" value={this.props.cafeId.price} min="1" max="5" {...price} />
              </div>
            </div>
          </div>
          <button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent padding">Update</button>
          <div className="padding-form"></div>
          <button onClick={() => {onCancel.bind(this)}} className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent padding">Cancel</button>
          <div className="padding-form"></div>
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