import React, { Component } from "react";
import BotsPage from './BotsPage'
import BotCard from '../components/BotCard'
class BotCollection extends Component {

  generate = () => {
    return this.props.bots.map((bot, index) => {
      return <BotCard key={index} bot={bot} addOrRemoveBots={this.props.addBots} removeFromMain={this.props.removeFromMain}/>
    })
  }

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          Collection of all bots
          {this.generate()}
        </div>
      </div>
    );
  }
}

export default BotCollection;
