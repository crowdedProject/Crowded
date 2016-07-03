import React, {Component} from 'react';

export default class About extends Component {
  render() {
    return (
      <div className="mainPage">
        <div className="teamProfile">
          <div className="teamHeader">
            <h1>About the Team</h1>
          </div>
          <div className="mdl-grid small">
            <div className="mdl-cell mdl-cell--4-col mdl-card mdl-shadow--3dp">
              <div className="mdl-card__media">
                <img src={require('../assets/profilePic/adamPic.jpg')} />
              </div>
              <div className="textBlock">
                <span className="aboutMe_Title">Adam Behrens</span><br/>
                <span className="mdl-typography--font-light mdl-typography--subhead"><span className="card_subhead">Tech interests:</span><br/>
                  &#x2022; artificial intelligence <br/>
                  &#x2022; machine learning <br/>
                  &#x2022; industrial software <br/>
                </span><br/>
                <a href="https://www.linkedin.com/in/adam-behrens-2364a122" target="_blank"><span className="imgIcon"><img src={require("../assets/linkedInIcon.png")} /></span></a>
                <a href="https://github.com/abe732" target="_blank"><span className="imgIcon"><img src={require("../assets/gitHubIcon.jpg")} /></span></a>
              </div>
            </div>

            <div className="mdl-cell mdl-cell--4-col mdl-card mdl-shadow--3dp">
              <div className="mdl-card__media">
                <img src={require('../assets/profilePic/boPic.jpg')} />
              </div>
              <div className="textBlock">
                <span className="aboutMe_Title">Bo Yao</span><br/>
                <span className="mdl-typography--font-light mdl-typography--subhead"><span className="card_subhead">Tech interests:</span><br/>
                  &#x2022; virtual reality <br/>
                  &#x2022; artificial intelligence< br/>
                  &#x2022; web Performance <br/>
                </span><br/>
                <a href="https:///www.linkedin.com/in/boyuyao" target="_blank"><span className="imgIcon"><img src={require("../assets/linkedInIcon.png")} /></span></a>
                <a href="https://github.com/Boyaohrbc" target="_blank"><span className="imgIcon"><img src={require("../assets/gitHubIcon.jpg")} /></span></a>
              </div>
            </div>

            <div className="mdl-cell mdl-cell--4-col mdl-card mdl-shadow--3dp">
              <div className="mdl-card__media">
                <img src={require('../assets/profilePic/ianPic.jpg')} />
              </div>
              <div className="textBlock">
                <span className="aboutMe_Title">Ian Stinson</span><br/>
                <span className="mdl-typography--font-light mdl-typography--subhead"><span className="card_subhead">Tech interests:</span><br/>
                  &#x2022; Augmented Reality <br/>
                  &#x2022; Fintech <br/>
                  &#x2022; React <br/>
                </span><br/>
                <a href="https://linkedin.com/in/istinson" target="_blank"><span className="imgIcon"><img src={require("../assets/linkedInIcon.png")} /></span></a>
                <a href="https://github.com/istinson" target="_blank"><span className="imgIcon"><img src={require("../assets/gitHubIcon.jpg")} /></span></a>
              </div>
            </div>
          </div>
        </div>
        <div className="techStack">
          <div className="mainRepo">
            <a href="https://github.com/crowdedProject/Crowded" target="_blank" className="mdl-button mdl-js-button mdl-button--raised mdl-color--accent mdl-color-text--accent-contrast">View Source</a>
          </div>
          <div className="techIcon">
            <h3>Tech Stack</h3>
            <img src={require("../assets/tech-stack/masterTSList.png")} />
          </div>
        </div>

     </div>
    );
  }
}