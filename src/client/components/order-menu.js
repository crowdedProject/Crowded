import React, {Component} from 'react';
import Dropdown, {DropdownTrigger, DropdownContent} from 'react-simple-dropdown';

class OrderMenu extends Component {
  constructor (props) {
    super(props);
  }

  handleLinkClick() {
    this.refs.dropdown.hide();
  }

  render() {

    return (
      <Dropdown>
        <DropdownTrigger className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
          ORDER BY PREFERENCE
        </DropdownTrigger>
        <DropdownContent>
          <ul>
            <li>Some Action</li>
            <li>Another Action</li>
            <li>Disabled Action</li>
            <li>Yet Another Action</li>
          </ul>
        </DropdownContent>
      </Dropdown>
    );
  }
};

export default OrderMenu;