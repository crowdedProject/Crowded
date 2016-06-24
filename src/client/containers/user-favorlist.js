import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchData, updateData} from '../actions/cafe-db';
import {Link, browserHistory} from 'react-router';
import {Accordion, AccordionItem} from 'react-sanfona';

export default class UserFavorList extends Component {
  render() {
    return (
      <div className="userfavorlist">
        <h2>saved favor list here</h2>
      </div>
    );
  }
};