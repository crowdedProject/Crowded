import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, browserHistory} from 'react-router';

class Auth0UserLogin extends Component{
  constructor(props){
    super(props);
    // this.state = {};
    // this.logOut = this.logOut.bind(this);
    // this.logState = this.logState.bind(this);
    this.showLock = this.showLock.bind(this);
    this.AUTHO_ID = 'tLn1lajyn8kZGO75cXM3vuRQlyRzrMbo';
    this.AUTHO_DOMAIN = 'crowded.auth0.com';
		this.logOut = this.logOut.bind(this);
  }
  
  getInitialState() {
    return {
      profile: null
    }
  }
 
  componentWillMount() {
    this.lock = new Auth0Lock(this.AUTHO_ID, this.AUTHO_DOMAIN);
    this.setState({idToken: this.getIdToken()});
  }
  
  componentDidMount() {

    this.lock.getProfile(this.idToken, function (err, profile) {
      if (err) {
        console.log("Error loading the Profile", err);
        return;
      }
      this.setState({profile: profile});
    }.bind(this));
  }
  
  showLock() {
    this.lock.show({
      icon: '../assets/coffee.jpg'
    });
    browserHistory.push('/login');
  }
  
  getIdToken() {
    var idToken = localStorage.getItem('userToken');
    var authHash = this.lock.parseHash(window.location.hash);
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


  logOut() {
    localStorage.removeItem('userToken');
    window.location.href = '/';
  }
  
  render() {
    if (this.state.idToken) {
       if (this.state.profile) {
         return (
           <h2>Welcome {this.state.profile.nickname}</h2>
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
      return (
        <div className="login-box">
          <a onClick={this.showLock}>Sign In</a>
        </div>
      );
    }
  } 
};

function mapStateToProps({login}) {
  return {login};
}

export default connect(mapStateToProps)(Auth0UserLogin);