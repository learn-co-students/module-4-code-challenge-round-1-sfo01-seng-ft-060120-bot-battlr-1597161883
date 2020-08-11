import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {
  constructor(){
  super()  
    this.state = {
      bots: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:6001/bots')
    .then(res => res.json())
    .then(json => this.setState({bots: json}))
  }

  render() {
    let bots = this.state.bots
    return (
      <div className="App">
        <BotsPage bots={this.state.bots} />
        
      </div>
    );
  }
}

export default App;
