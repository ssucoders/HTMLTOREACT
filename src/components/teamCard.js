import React, { Component } from "react";

class TeamCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let data = this.props.data;
        return (
            <React.Fragment>
               <div className="card">
                <img className="card-img-top" src={"images/" + data.image} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">{data.name}</h5>
                  <p className="card-text">{data.designation}</p>
                </div>
              </div>
            </React.Fragment>
        )
    }
}

export default TeamCard;