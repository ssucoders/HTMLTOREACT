import React, { Component } from "react";

class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg">
                                <a href="#" id="logo" title="Finconix">Finconix</a>
                                <p>Augiue lacinia tempus aptender detum orgrcusam ques sim.Ut eget prasent pelaseranostra conubivatae in.</p>
                            </div>
                            <div className="col-lg">
                                <h4>Quick List<span></span></h4>
                                <ul>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Latest News</a></li>
                                    <li><a href="#">Feedback</a></li>
                                    <li><a href="#">Support</a></li>
                                </ul>
                            </div>
                            <div className="col-lg">
                                <h4>Twitters Feed<span></span></h4>
                                <ul>
                                    <li>Augiue lacinia tempus aptender detum orgrcusam ques sim.
                                    <a href="#">http:themeforest.net</a></li>
                                    <li>Augiue lacinia tempus aptender detum orgrcusam ques sim.
                                    <a href="#">http:themeforest.net</a></li>
                                </ul>
                            </div>
                            <div className="col-lg">
                                <h4>Quick List<span></span></h4>
                                <ul>
                                    <li>2AO.Queenstown St.USA</li>
                                    <li>(061)3465789,(117)135</li>
                                    <li>fanconix.brann@yahoo.com</li>
                                    <li>toni19@hotmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="copyRight">
                        <p className="text-center">Copyright 2018 finconix Consulting.All Right Reserved.</p>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}

export default Footer;