import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends Component {
  //start here with your code for step one

  state = {
    allBots: [],
    myBots: []
  }

  componentDidMount(){
    fetch('http://localhost:6001/bots')
    .then(res => res.json())
    .then(data => this.setState({allBots: data}))
  }

  addBot = (bot) => {
    if(!this.state.myBots.includes(bot)){
      this.setState({
        myBots: [...this.state.myBots, bot]
      })
    }
  }

  removeBot = (bot) => {
    let newArray = this.state.myBots.filter(botItem => botItem.id !== bot.id)
    this.setState({
      myBots: newArray
    })
  }

  deleteBot = (bot) => {
    fetch(`http://localhost:6001/bots/${bot.id}`, {method: "DELETE"})
    .then(res => res.json())
    .then(data => {
      // pessimistic rendering: remove from myBots & from allBots
      this.removeBot(bot)
      let newArray = this.state.allBots.filter(botItem => botItem.id !== bot.id)
      this.setState({
        allBots: newArray
      })
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy myBots={this.state.myBots} removeBot={this.removeBot} deleteBot={this.deleteBot}/>
        <BotCollection allBots={this.state.allBots} addBot={this.addBot} deleteBot={this.deleteBot}/>
      </div>
    );
  }
}

export default BotsPage;
