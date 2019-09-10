import React, { Component } from "react";

class TopHeader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <div id="topHeader">
                    <div className="container">
                        <div className="row">
                            <div className="col-5 ">
                                <a href="#">companyinfo@gmail.com</a>
                                <a href="#">2AO.Queenstown St.USA</a>
                            </div>
                            <div className="col-2"></div>
                            <div className="col-5 text-right">
                                <p> <a href="#">Follow Us </a><span>Call Us :</span> 000 888 999 </p>
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default TopHeader;