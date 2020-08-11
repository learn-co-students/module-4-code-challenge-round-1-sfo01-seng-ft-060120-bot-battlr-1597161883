import React, { Component } from "react";
import BotCard from "../components/BotCard";

class BotCollection extends Component {
  //your code here

  buildBotCards = () => {
    return this.props.bots.map(bot => {
      return <BotCard bot={bot} key={bot.id} handleClick={this.props.addToBotArmy} dischargeBot={this.props.dischargeBot}/>
    })
  }

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.buildBotCards()}
        </div>
      </div>
    );
  }
}

export default BotCollection;
