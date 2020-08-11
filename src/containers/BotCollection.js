import React, { Component } from "react";
import BotCard from '../components/BotCard'
// import BotSpecs from '../components/BotSpecs'

class BotCollection extends Component {
  //your code here

  // this is where we display either one or allBots
  
  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.allBots.map(bot => {
            return <BotCard 
                      bot={bot} 
                      key={bot.id} 
                      deleteBot={this.props.deleteBot} 
                      handleCardClick={this.props.toggleView}
                    />
          })}
        </div>
      </div>
    );
  }
}

export default BotCollection;
