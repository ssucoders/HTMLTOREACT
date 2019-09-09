import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import Header from "./components/header";


class App extends Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <React.Fragment>
        <Header/>
      <div className="container-fluid App">
        body
      </div>
      </React.Fragment>
    );
  }
}

export default hot(module)(App);