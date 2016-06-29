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
    let liArray = [];
    for (let item in props.prefObj) {
      if (props.prefObj[item] === true && item !== 'proximity') {
        liArray.push(<li key={item}>{item}</li>);
      }
    }
    return liArray;
  }


  render() {

    return (
      <Dropdown>
        <DropdownTrigger className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
          ORDER BY PREFERENCE
        </DropdownTrigger>
        <DropdownContent>
          <ul>
            {this.populateMenu(this.props)}
          </ul>
        </DropdownContent>
      </Dropdown>
    );
  }
};

export default OrderMenu;