import React, { Component } from "react";
import TeamCard from "./teamCard";

class OurTeam extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let team=[
      {"image":"IMG-20180730-WA0002.jpg","name":"Mao Hayes","designation":"CEO and Founder Of Finconix"},
      {"image":"IMG-20180730-WA0002.jpg","name":"Gage Ullrich","designation":"CEO and Founder Of Finconix"},
      {"image":"IMG-20180730-WA0002.jpg","name":"Zendar Rohan","designation":"CEO and Founder Of Finconix"},
    ]
    return (
      <React.Fragment>
        <div className="team">
          <div className="container">
            <div id="expertTeam">
              <h3 className="text-center"><strong>Our Expert Team</strong></h3>
              <p className="text-center">Augiue lacinia tempus aptender detum orgrcusam ques sim.Ut eget prasent pelaseranostra</p>
            </div>
            <div className="card-group">
              {team.map((el,i)=>{
                return(<TeamCard data={el} key={i}/>)
              })}
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default OurTeam;