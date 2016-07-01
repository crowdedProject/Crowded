import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';
import AppBar from 'material-ui/AppBar';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.onLogInSubmit = this.onLogInSubmit.bind(this);
    this.onAboutSubmit - this.onAboutSubmit.bind(this);
  }

  onLogInSubmit() {
    browserHistory.push('/login');
  }

  onAboutSubmit() {
    browserHistory.push('/about');
  }
  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }


  render() {
    return(
      <div>
      <AppBar
        title="CrowdedCafe"
        iconClassNameRight="muidocs-icon-navigation-expand-more" 
      />
      </div>
    );
  }
} 

Header.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
// <div class="android-header mdl-layout__header mdl-layout__header--waterfall">
//         <div class="mdl-layout__header-row">
//           <span class="android-title mdl-layout-title">
//           </span>
//           <!-- Add spacer, to align navigation to the right in desktop -->
//           <div class="android-header-spacer mdl-layout-spacer"></div>
//           <div class="android-search-box mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right mdl-textfield--full-width">
//             <label class="mdl-button mdl-js-button mdl-button--icon" for="search-field">
//               <i class="material-icons">search</i>
//             </label>
//             <div class="mdl-textfield__expandable-holder">
//               <input class="mdl-textfield__input" type="text" id="search-field">
//             </div>
//           </div>
//           <!-- Navigation -->
//           <div class="android-navigation-container">
//             <nav class="android-navigation mdl-navigation">
//               <a class="mdl-navigation__link mdl-typography--text-uppercase" href="">Phones</a>
//               <a class="mdl-navigation__link mdl-typography--text-uppercase" href="">Tablets</a>
//               <a class="mdl-navigation__link mdl-typography--text-uppercase" href="">Wear</a>
//               <a class="mdl-navigation__link mdl-typography--text-uppercase" href="">TV</a>
//               <a class="mdl-navigation__link mdl-typography--text-uppercase" href="">Auto</a>
//               <a class="mdl-navigation__link mdl-typography--text-uppercase" href="">One</a>
//               <a class="mdl-navigation__link mdl-typography--text-uppercase" href="">Play</a>
//             </nav>
//           </div>
//           <span class="android-mobile-title mdl-layout-title">
//             <img class="android-logo-image" src="images/android-logo.png">
//           </span>
//           <button class="android-more-button mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect" id="more-button">
//             <i class="material-icons">more_vert</i>
//           </button>
//           <ul class="mdl-menu mdl-js-menu mdl-menu--bottom-right mdl-js-ripple-effect" for="more-button">
//             <li class="mdl-menu__item">5.0 Lollipop</li>
//             <li class="mdl-menu__item">4.4 KitKat</li>
//             <li disabled class="mdl-menu__item">4.3 Jelly Bean</li>
//             <li class="mdl-menu__item">Android History</li>
//           </ul>
//         </div>
//       </div>
//       </div>

      // <div className="div-holder-big">
      // <div className="header-component">
      //   <h1>CrowdedCafe </h1>
      //   <div className="button-holder">
      //     <button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" onClick={this.onLogInSubmit}>My Profile</button>
      //   </div>
      //   <div className="button-holder">
      //     <button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" onClick={this.onAboutSubmit}>About</button>
      //   </div>
      // </div>
      // </div>