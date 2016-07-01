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
                <img src={require('../assets/AdamPicturePlaceholder.png')} />
              </div>
              <div className="textBlock">
                <span className="aboutMe_Title">Adam Behrens</span><br/>
                <span className="mdl-typography--font-light mdl-typography--subhead"><span className="card_subhead">Tech interests:</span><br/>
                  &#x2022; placeholder 1 <br/>
                  &#x2022; placeholder 2 <br/>
                  &#x2022; placeholder 3 <br/>
                </span><br/>
                <a href="https://www.linkedin.com/in/adam-behrens-2364a122" target="_blank"><span className="imgIcon"><img src={require("../assets/linkedInIcon.png")} /></span></a>
                <a href="https://github.com/abe732" target="_blank"><span className="imgIcon"><img src={require("../assets/gitHubIcon.jpg")} /></span></a>
              </div>
            </div>

            <div className="mdl-cell mdl-cell--4-col mdl-card mdl-shadow--3dp">
              <div className="mdl-card__media">
                <img src={require('../assets/boPicturePlaceholder.jpg')} />
              </div>
              <div className="textBlock">
                <span className="aboutMe_Title">Bo Yao</span><br/>
                <span className="mdl-typography--font-light mdl-typography--subhead"><span className="card_subhead">Tech interests:</span><br/>
                  &#x2022; placeholder 1 <br/>
                  &#x2022; placeholder 2 <br/>
                  &#x2022; placeholder 3 <br/>
                </span><br/>
                <a href="https:///www.linkedin.com/in/boyuyao" target="_blank"><span className="imgIcon"><img src={require("../assets/linkedInIcon.png")} /></span></a>
                <a href="https://github.com/Boyaohrbc" target="_blank"><span className="imgIcon"><img src={require("../assets/gitHubIcon.jpg")} /></span></a>
              </div>
            </div>

            <div className="mdl-cell mdl-cell--4-col mdl-card mdl-shadow--3dp">
              <div className="mdl-card__media">
                <img src={require('../assets/ianPicturePlaceholder.png')} />
              </div>
              <div className="textBlock">
                <span className="aboutMe_Title">Ian Stinson</span><br/>
                <span className="mdl-typography--font-light mdl-typography--subhead"><span className="card_subhead">Tech interests:</span><br/>
                  &#x2022; placeholder 1 <br/>
                  &#x2022; placeholder 2 <br/>
                  &#x2022; placeholder 3 <br/>
                </span><br/>
                <a href="https://linkedin.com/in/istinson" target="_blank"><span className="imgIcon"><img src={require("../assets/linkedInIcon.png")} /></span></a>
                <a href="https://github.com/istinson" target="_blank"><span className="imgIcon"><img src={require("../assets/gitHubIcon.jpg")} /></span></a>
              </div>
            </div>
          </div>
        </div>
        <div className="techStack">
          <div className="mainRepo">
            <a href="https://github.com/crowdedProject/Crowded">
              Check it out on Github
            </a>
          </div>

          <div className="techIcon">
            <h3>tech icon here</h3>
          </div>
        </div>

     </div>
    );
  }
}