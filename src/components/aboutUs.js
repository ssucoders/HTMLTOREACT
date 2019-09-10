import React, { Component } from "react";

class AboutUs extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                     <div className="row">
                        <div className="col-lg-6">
                            <h2>Why People Choose Our Company</h2>
                    <p>
                  Augiue lacinia tempus aptender detum orgrcusam ques sim.Ut eget prasent.
                  Augiue lacinia tempus aptender detum orgrcusam ques sim.Ut eget prasent.
                    </p>
                <ul id="info">
                  <li>
                    <h3>Unique Business Idea</h3>
                    <p>Augiue lacinia tempus aptender detum orgrcusam ques sim.Ut eget prasent pelaseranostra</p>
                  </li>
                  <li>
                    <h3>Fast Approval</h3>
                    <p>Augiue lacinia tempus aptender detum orgrcusam ques sim.Ut eget prasent pelaseranostra</p>
                  </li>
                  <li>
                    <h3>Refinancing</h3>
                    <p>Augiue lacinia tempus aptender detum orgrcusam ques sim.Ut eget prasent pelaseranostra</p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <img src="images/IMG-20180915-WA0087.jpg" className="img-thumbnail" />
              </div>
            </div>
          </div>
            </React.Fragment>
        )
    }
}

export default AboutUs;