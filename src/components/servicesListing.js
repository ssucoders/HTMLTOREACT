import React, { Component } from "react";
import ServicesCard from "./serviceCard";

class ServicesListing extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let services = [
            {"title":"Financial Planning", "subtitle": "Best Analysis", "image": "image.jpg", "text":"Some quick example text to build on the card title and make up the bulk of the card's content."},
            {"title":"Corporate Services", "subtitle": "Analysis Finance", "image": "IMG-20180915-WA0014.jpg","text":"Some quick example text to build on the card title and make up the bulk of the card's content."},
            {"title":"Busniess Consulting", "subtitle": "Free Consulting", "image": "IMG-20181003-WA0022.jpg","text":"Some quick example text to build on the card title and make up the bulk of the card's content."}
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