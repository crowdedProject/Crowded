import React, {Component} from 'react';
import Dropdown, {DropdownTrigger, DropdownContent} from 'react-simple-dropdown';

class OrderMenu extends Component {
  constructor (props) {
    console.log('ORDERMENU PROPS: ', props);
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
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
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
          <div>
            {this.populateMenu(this.props)}
          </div>
        </DropdownContent>
      </Dropdown>
    );
  }
};

export default OrderMenu;