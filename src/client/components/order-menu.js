import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Dropdown, {DropdownTrigger, DropdownContent} from 'react-simple-dropdown';
import {orderCafeList} from '../actions/index';

class OrderMenu extends Component {
  constructor (props) {
    super(props);
  }

  handleLinkClick() {
    this.refs.dropdown.hide();
  }
  
  populateMenu(props) {
    let selectionArr = [];
    for (let item in props.prefObj) {
      if (props.prefObj[item] === true && item !== 'proximity') {
        selectionArr.push(
          <div key={item}>
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent"
             onClick={()=>{this.props.orderCafeList(item)}}>
            {item}
            </button>
          </div>
        );
      }
    }
    return selectionArr;
  }

  render() {
    return (
      <Dropdown>
        <DropdownTrigger className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
          ORDER BY PREFERENCE
        </DropdownTrigger>
        <DropdownContent>
          <div className="drop-down-adjust">
            {this.populateMenu(this.props)}
          </div>
        </DropdownContent>
      </Dropdown>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({orderCafeList}, dispatch);
}
export default connect(null, mapDispatchToProps)(OrderMenu);




