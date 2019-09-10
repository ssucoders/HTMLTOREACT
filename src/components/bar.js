import React, { Component } from "react";

class Bar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div id="bar">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="nav-item">
                <blockquote className="blockquote text">
                  <span className="mb-0">Contact with Us for customer support</span>
                  <div className="blockquote-footer">We are ready 24/7 to support</div>
                </blockquote>
              </div>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="#" className="btn btn-light">Get Started</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Bar;