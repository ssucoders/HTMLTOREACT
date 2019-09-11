import React, { Component } from "react";

class StatisticsPoints extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let data = this.props.data;
        return (
            <React.Fragment>
                <li className="nav-item">
                    <h4 className="nav-link active">{data.points}</h4>
                    <p className="nav-link">{data.stats}</p>
                </li>
            </React.Fragment>
        )
    }
}

export default StatisticsPoints;