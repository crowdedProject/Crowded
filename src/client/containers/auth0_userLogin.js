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
		this.socialLogOut = this.socialLogOut.bind(this);
		this.selfLogOut = this.selfLogOut.bind(this);
  }
  
  // getInitialState() {
  //   return {
  //     profile: null
  //   }
  // }
 
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
			this.setState({profile: profile});
		}.bind(this));
  }
  
  showLock() {
    this.lock.show({
      icon: 'http://icons.iconarchive.com/icons/tatice/cristal-intense/48/Java-icon.png',
    });
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
					   <h2>Welcome Back,</h2>
						 <h2>{this.state.profile.nickname}</h2>
						 <img className="avatar" src={this.state.profile.picture} />
               <div>
               <a href='/'>Click Here to Continue</a>
               </div>
               <div>
               <a href='/favorite'>Go to your favorite list</a>
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

function mapStateToProps({login}) {
  return {login};
}

export default connect(mapStateToProps)(Auth0UserLogin);