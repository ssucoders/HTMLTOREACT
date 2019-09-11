

import React, { Component } from "react";

class ServicesButton extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let data = this.props.data;
        return (
            <React.Fragment>
                <a href="#" className="btn btn-primary">{data.button}</a>
            </React.Fragment>
        )
    }
}

export default ServicesButton;