import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addUserData} from '../actions/cafe-db';
import {Link, browserHistory} from 'react-router';
import jwtDecode from 'jwt-decode';

class Auth0UserLogin extends Component{
  constructor(props) {
    super(props);
    this.state = {};
    this.showLock = this.showLock.bind(this);
    this.AUTHO_ID = 'tLn1lajyn8kZGO75cXM3vuRQlyRzrMbo';
    this.AUTHO_DOMAIN = 'crowded.auth0.com';
		this.socialLogOut = this.socialLogOut.bind(this);
		this.selfLogOut = this.selfLogOut.bind(this);
    this.addUser = this.addUser.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
  }

  componentWillMount() {
    this.lock = new Auth0Lock(this.AUTHO_ID, this.AUTHO_DOMAIN);
    this.setState({idToken: this.getIdToken()});
  }
  
  componentDidMount() {
		this.lock.getProfile(this.state.idToken, function (err, profile) {
			if (err) {
				console.log("Error loading the Profile", err);
				return;
			}
			this.setState({profile});
      this.addUser(this.state.profile);
		}.bind(this));
    console.log('token state after did mount', this.state.idToken)
  }
  
  showLock() {
    this.lock.show({
      icon: 'http://icons.iconarchive.com/icons/tatice/cristal-intense/48/Java-icon.png',
    });
  }
  
  addUser(profile) {
    this.props.addUserData(profile);
  }

  getIdToken() {
    var idToken = localStorage.getItem('userToken');
    var authHash = this.lock.parseHash(window.location.hash);

    // if(idToken){
    //    const payload = jwtDecode(idToken);
    //    if( payload.exp < Date.now() / 1000 ){ 
    //       return null;
    //    }
    // }

    if (!idToken && authHash) {
      if (authHash.id_token) {
        idToken = authHash.id_token
        localStorage.setItem('userToken', authHash.id_token);
      }
      if (authHash.error) {
        console.log("Error signing in", authHash);
        return null;
      }
    }
    return idToken;
  }

  socialLogOut() {
    localStorage.removeItem('userToken');
    window.location.href = 'https://crowded.auth0.com/v2/logout?federated';
  }

	selfLogOut() {
		localStorage.removeItem('userToken');
		window.location.href = '/';
	}
  
  render() {
    if (this.state.idToken) {
       if (this.state.profile) {
         return (
					 <div>
					   <h2>Welcome back, {this.state.profile.given_name}!</h2>
						 <img className="avatar" src={this.state.profile.picture} />
               <div>
               <Link to='/loggedIn'>Click Here to Continue</
               Link>
               </div>
               <div>
               <Link to='/favorite'>Go to your favorite list</Link>
               </div>
						 <div>
						   <a onClick={this.socialLogOut}>Log in as different user on your favorite social network</a>
						 </div>
						 <div>
						   <a onClick={this.selfLogOut}>Log Out</a>
						 </div>
					 </div>
         );
       }else {
         return (
           <div className="loading">
					   Loading profile
					   <div>
               <a onClick={this.logOut}>Log Out</a>
						 </div>
					 </div>
         );
       }
    } else {
      this.showLock();
      return (
        <div></div>
      );
    }
  } 
};

function mapStateToProps(state) {
  return ({
    login: state.login,
    idToken: state.login.idToken,
    profile: state.login.profile
  })
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addUserData}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth0UserLogin);
