import React, { Component } from "react";

class ServicesListing extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="card-group">
                        <div className="card">
                            <img src="images/image.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Financial Planning</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Best Analysis</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">READ MORE</a>
                            </div>
                        </div>
                        <div className="card" >
                            <img src="images/IMG-20180915-WA0014.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Corporate Services</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Analysis Finance</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">READ MORE</a>
                            </div>
                        </div>
                        <div className="card">
                            <img src="images/IMG-20181003-WA0022.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Busniess Consulting</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Free Consulting</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">READ MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ServicesListing;