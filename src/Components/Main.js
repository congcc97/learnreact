import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DirectURL from "../Router/DirectURL";

class Main extends Component {
  render() {
    return (
      <div className="main-panel">
        <Navbar></Navbar>
        <DirectURL dataUser={this.props.dataUser}></DirectURL>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;
