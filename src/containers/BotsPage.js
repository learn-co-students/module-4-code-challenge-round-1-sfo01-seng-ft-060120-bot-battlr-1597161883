import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends Component {
  //start here with your code for step one

  state = {
    allBots: [],
    myBots: [],
    clicked: false,
    currentBot: {}
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

  toggleView = (bot) => {
    this.setState({
      clicked: !this.state.clicked,
      currentBot: bot
    })
  }

  renderBotCollection = () => {
    return <BotCollection 
              allBots={this.state.allBots} 
              addBot={this.addBot} 
              deleteBot={this.deleteBot} 
              toggleView={this.toggleView}/>
  }

  renderOneBot = () => {
    return <BotSpecs 
              bot={this.state.currentBot} 
              addBot={this.addBot} 
              toggleView={this.toggleView}/>
  }

  render() {
    return (
      <div>
        <YourBotArmy myBots={this.state.myBots} removeBot={this.removeBot} deleteBot={this.deleteBot}/>
        {this.state.clicked ? this.renderOneBot() : this.renderBotCollection()}
      </div>
    );
  }
}

export default BotsPage;
