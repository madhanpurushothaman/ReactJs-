import React, { Component } from "react";
import Navbar from "../../pages/navbar/Navbar";

import MainCarousel from "../../pages/carousel/MainCarousel";
import Searchbar from "../../pages/Seachbar/search";
import "./Home.css";

/**
 * Home component which acts has the main container for other components
 */

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { data: {} };
  }

  render() {
    return (
      <div className="container">
        <Navbar></Navbar>
        <div className="content-wrapper">
          <div className="carousel-container">
            <MainCarousel></MainCarousel>
          </div>
          <div className="search-wrapper">
            <Searchbar></Searchbar>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
