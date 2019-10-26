

import React, { Component } from "react";
import ServicesButton from "./serviceButton";

class ServicesCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let data = this.props.data;
        let services =[
            {"button":"READ MORE"},
           ]
        return (
            <React.Fragment>
                <div className="card">
                                <img src={"images/" + data.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{data.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{data.subtitle}</h6>
                                    <p className="card-text">{data.text}</p>
                                    {services.map((el , i)=>{
                                        return(<ServicesButton data={el} key={i} />)
                                    })}
                                </div>
                            </div>
            </React.Fragment>
        )
    }
}

export default ServicesCard;