import React, { Component } from "react";
import ServicesCard from "./serviceCard";

class ServicesListing extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let services = [
            {"title":"test1", "subtitle": "hello", "image": "image.jpg"},
            {"title":"test2", "subtitle": "hello", "image": "IMG-20180915-WA0014.jpg"},
            {"title":"test3", "subtitle": "hello", "image": "IMG-20181003-WA0022.jpg"}
        ]
        return (
            <React.Fragment>
                <div className="container">
                    <div className="card-group">
                        {services.map((el, i)=>{
                            return (<ServicesCard data={el} key={i} />)
                        })}
                        
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ServicesListing;