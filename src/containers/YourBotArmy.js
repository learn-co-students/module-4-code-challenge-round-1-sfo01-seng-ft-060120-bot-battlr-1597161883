import React, { Component } from "react";
import BotCard from '../components/BotCard'
class YourBotArmy extends Component {
  //your bot army code here...
  generateMine = () => {
    return this.props.myBots.map((myBot, index) => {
      return <BotCard key={index} bot={myBot} addOrRemoveBots={this.props.removeBots} removeFromMain={this.props.removeFromMain}/>
    })
  }
  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.generateMine()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;