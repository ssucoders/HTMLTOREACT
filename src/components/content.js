import React, { Component } from "react";
import Slider from "./Slider"
import ServicesListing from "./servicesListing";
import AboutUs from "./AboutUs";
import Statistics from "./Statistics";
import OurTeam from "./ourTeam";
import Bar from "./bar";

class Content extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div className="content">
          <Slider />
          <ServicesListing />
          <div className="clear"></div>
          <AboutUs />
          <Statistics/>
          <OurTeam/>
          <Bar/>
        </div>
      </React.Fragment>
    )
  }
}

export default Content;