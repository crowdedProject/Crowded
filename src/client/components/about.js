import React, {Component} from 'react';

export default class About extends Component {
  render() {
    return (
      <div className="mainPage">
        <div className="teamProfile">
          <div className="teamHeader">
            <h1>About the Team</h1>
          </div>
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--4-col mdl-card mdl-shadow--3dp">
              <div class="mdl-card__media">
                <img src="../assets/AdamPicturePlaceholder.png" />
              </div>
              <div>
                <span class="aboutMe_Title">Adam Behrens</span><br/>
                <span class="mdl-typography--font-light mdl-typography--subhead"><span id="card_subhead">Tech interests:</span><br/>
                  &#x2022; placeholder 1 <br/>
                  &#x2022; placeholder 2 <br/>
                  &#x2022; placeholder 3 <br/>
                </span><br/>
              </div>
            </div>

            <div className="mdl-cell mdl-cell--4-col mdl-card mdl-shadow--3dp">
              <div class="mdl-card__media">
                <img src="../assets/boPicturePlaceholder.svg" />
              </div>
              <div>
                <span class="aboutMe_Title">Bo Yao</span><br/>
                <span class="mdl-typography--font-light mdl-typography--subhead"><span id="card_subhead">Tech interests:</span><br/>
                  &#x2022; placeholder 1 <br/>
                  &#x2022; placeholder 2 <br/>
                  &#x2022; placeholder 3 <br/>
                </span><br/>
              </div>
            </div>

            <div className="mdl-cell mdl-cell--4-col mdl-card mdl-shadow--3dp">
              <div class="mdl-card__media">
                <img src="../assets/ianPicturePlaceholder.png" />
              </div>
              <div>
                <span class="aboutMe_Title">Ian Stinson</span><br/>
                <span class="mdl-typography--font-light mdl-typography--subhead"><span id="card_subhead">Tech interests:</span><br/>
                  &#x2022; placeholder 1 <br/>
                  &#x2022; placeholder 2 <br/>
                  &#x2022; placeholder 3 <br/>
                </span><br/>
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