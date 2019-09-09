import React, { Component } from "react";

class Header extends Component {
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



                <header>

                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <a className="navbar-brand " href="#" id="logo" title="Finconix">Finconix</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item ">
                                        <a className="nav-link" href="#">Home </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">About</a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link" href="#">Services</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Project</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Page</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Contact</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="btn btn-primary">Get a Quotes</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div className="clear"></div>
                    </div>
                </header>
            </React.Fragment>
        )
    }
}

export default Header;