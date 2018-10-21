import React, { Component } from "react";
import "./App.css";
import Carousel from "./Carousel";
import { getImages } from "./imageData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      image: getImages()
    }
  }


  render() {
    return (
      
        <Carousel images={this.state.image} />

       
      
    );
  }
}

export default App;
