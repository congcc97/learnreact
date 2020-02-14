import React, { Component } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import { BrowserRouter as Router } from "react-router-dom";
import dataTable from "./Data.json";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataTable
    };
  }

  render() {
    return (
      <Router>
        <div className="App wrapper">
          <Sidebar></Sidebar>
          <Main dataUser={this.state.data}></Main>
        </div>
      </Router>
    );
  }
}

export default App;
