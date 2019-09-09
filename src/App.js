import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Content from "./components/content";


class App extends Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <React.Fragment>
        <Header/>
      <Content />
      <Footer />
      </React.Fragment>
    );
  }
}

export default hot(module)(App);