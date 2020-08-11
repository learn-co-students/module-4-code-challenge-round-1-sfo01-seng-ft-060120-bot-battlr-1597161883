import React, { Component } from "react";

class BotCollection extends Component {
  //your code here

  render() {
    // let {id, name, health, damage, armor, bot_class, catchphrase, avatar_url, created_at, updated_at} = this.props.bots
    // let allBots = (props.bots.map(bots => bots={bots}))
    return (
      <div className="ui four column grid">
        <div className="row">
          
          Collection of all bots
          {this.props.bots.map(bot => `<div> <card value=${bot} /></div>)`)}
        </div>
      </div>
    );
  }
}

export default BotCollection;
