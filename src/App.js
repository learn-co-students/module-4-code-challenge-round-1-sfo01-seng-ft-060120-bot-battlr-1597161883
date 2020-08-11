import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {
  state = {
    bots: [],
    myBots: []
  }
  
  componentDidMount(){
    fetch('http://localhost:6001/bots')
    .then(r => r.json())
    .then(json => {
      this.setState({bots: json})
    })
  }

  addBots = (bot) => {
    if(!this.state.myBots.includes(bot)){
      this.setState({myBots: [...this.state.myBots, bot]})
    }
  }

  removeBots = (bot) => {
    console.log('remove')
    if(this.state.myBots.includes(bot)){
      let removed = this.state.myBots.filter(item => item !== bot)
      this.setState({myBots: removed})
    }
  }

  removeFromMain = (bot) => {
    console.log('main page')
    if(this.state.bots.includes(bot)){
      let removed = this.state.bots.filter(item => item !== bot)
      this.setState({bots: removed})
    }
  }

  render() {
    return (
      <div className="App">
        <BotsPage bots={this.state.bots} myBots={this.state.myBots} addBots={this.addBots} removeBots={this.removeBots} removeFromMain={this.removeFromMain}/>
      </div>
    );
  }
}

export default App;
