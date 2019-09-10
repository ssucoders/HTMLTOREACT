import React, { Component } from "react";

class Statistics extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div id="statistics">
          <div className="container">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <h4 className="nav-link active">6589</h4>
                <p className="nav-link">PROJECTS COMPLETED</p>
              </li>
              <li className="nav-item">
                <h4 className="nav-link">264+</h4>
                <p className="nav-link">EXPERT TECNICIAN</p>
              </li>
              <li className="nav-item">
                <h4 className="nav-link">30M</h4>
                <p className="nav-link">HAPPY CUSTOMERS</p>
              </li>
              <li className="nav-item">
                <h4 className="nav-link">2659</h4>
                <p className="nav-link">CUPS OF COFFEE</p>
              </li>
            </ul>
          </div>
          <div className="clear"></div>
        </div>
      </React.Fragment>
    )
  }
}

export default Statistics;