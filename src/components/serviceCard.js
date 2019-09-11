

import React, { Component } from "react";

class ServicesCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let data = this.props.data;
        return (
            <React.Fragment>
                <div className="card">
                                <img src={"images/" + data.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{data.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{data.subtitle}</h6>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">READ MORE</a>
                                </div>
                            </div>
            </React.Fragment>
        )
    }
}

export default ServicesCard;