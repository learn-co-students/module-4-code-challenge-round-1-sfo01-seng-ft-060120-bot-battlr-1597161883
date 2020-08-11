import React, { Component } from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends Component {
  
  buildArmyCards = () => {
    return this.props.botArmy.map(bot => {
      return <BotCard bot={bot} key={bot.id} handleClick={this.props.removeFromBotArmy}/>
    })
  }

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.buildArmyCards()}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
