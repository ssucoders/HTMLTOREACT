import React, { Component } from "react";
import ServicesCard from "./serviceCard";

class ServicesListing extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let services = [
            {"title":"Financial Planning", "subtitle": "Best Analysis", "image": "image.jpg",},
            {"title":"Corporate Services", "subtitle": "Analysis Finance", "image": "IMG-20180915-WA0014.jpg"},
            {"title":"Busniess Consulting", "subtitle": "Free Consulting", "image": "IMG-20181003-WA0022.jpg"}
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