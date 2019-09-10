import React, { Component } from "react";
import TopHeader from "./topHeader";
import MenuListing from "./menuListing";

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <TopHeader />
                <header>
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <a className="navbar-brand " href="#" id="logo" title="Finconix">Finconix</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <MenuListing />
                        </nav>
                        <div className="clear"></div>
                    </div>
                </header>
            </React.Fragment>
        )
    }
}

export default Header;