import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
class BotsPage extends Component {
  //start here with your code for step one

  render() {
    return (
      <div><YourBotArmy myBots={this.props.myBots} removeBots={this.props.removeBots}/><BotCollection bots={this.props.bots} addBots={this.props.addBots} removeFromMain={this.props.removeFromMain}/></div>
      // <div></div>
    )
  }
}

export default BotsPage;