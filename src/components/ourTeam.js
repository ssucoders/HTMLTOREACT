import React, { Component } from "react";

class OurTeam extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div className="team">
          <div className="container">
            <div id="expertTeam">
              <h3 className="text-center"><strong>Our Expert Team</strong></h3>
              <p className="text-center">Augiue lacinia tempus aptender detum orgrcusam ques sim.Ut eget prasent pelaseranostra</p>
            </div>
            <div className="card-group">
              <div className="card">
                <img className="card-img-top" src="images/IMG-20180730-WA0002.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Mao Hayes</h5>
                  <p className="card-text">CEO and Founder Of Finconix</p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src="images/IMG-20180730-WA0002.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Gage Ullrich</h5>
                  <p className="card-text">CEO and Founder Of Finconix</p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src="images/IMG-20180730-WA0002.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Zendar Rohan</h5>
                  <p className="card-text">CEO and Founder Of Finconix</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default OurTeam;