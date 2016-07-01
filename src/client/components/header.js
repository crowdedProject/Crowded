import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

export default class Header extends Component {
  constructor(props) {
    super(props);
    injectTapEventPlugin();
    this.state = {
      valueSingle: ''
    };
    this.handleChangeSingle = this.handleChangeSingle.bind(this);
  }

  handleChangeSingle(event, value) {
    this.setState({
      valueSingle: value,
    });
      if (value === "1") {
        browserHistory.push('/login');
      }
      if (value === "2") {
        browserHistory.push('/cafes');
      }
      if (value === "3") {
        browserHistory.push('/favorite');
      }
      if (value === "4") {
        browserHistory.push('/neighborhood');
      }
      if (value === "5") {
        browserHistory.push('/');
      }
      if (value === "6") {
        browserHistory.push('/login');
      }
      if (value === "7") {
        browserHistory.push('/about');
      }
    }

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  render() {
    return(
      <div>
      <AppBar
        title="CrowdedCafe"
        iconElementRight={
          <IconMenu
          iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
          anchorOrigin={{horizontal: 'left', vertical: 'top'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onChange={this.handleChangeSingle}
          value={this.state.valueSingle}>

            <MenuItem value="1" primaryText="Login"/>
            <MenuItem value="5" primaryText="Preferences"/>
            <MenuItem value="2" primaryText="Search Results" />
            <MenuItem value="3" primaryText="Favorites" />
            <MenuItem value="4" primaryText="Neighborhood"/>
            <MenuItem value="6" primaryText="Sign Out" />
            <MenuItem value="7" primaryText="About"/>
         </IconMenu>
        } />
      </div>  
    );
  }
}

Header.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};