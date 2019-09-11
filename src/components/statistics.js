import React, { Component } from "react";
import StatisticsPoints from "./statisticPoints";



class Statistics extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let statistics = [
      {"points":"6589","stats":"PROJECTS COMPLETED"},
      {"points":"264+","stats":"EXPERT TECNICIAN"},
      {"points":"30M","stats":"HAPPY CUSTOMERS"},
      {"points":"2659","stats":"CUPS OF COFFEE"},
    ]

    return (
      <React.Fragment>
        <div id="statistics">
          <div className="container">
          <ul className="nav justify-content-center">
            {statistics.map((el , i)=>{
              return(<StatisticsPoints data={el} key={i} />)
            })}
            </ul>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Statistics;