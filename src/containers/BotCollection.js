import React, { Component } from "react";
import BotCard from '../components/BotCard'
import BotSpecs from '../components/BotSpecs'

class BotCollection extends Component {
  //your code here

  // this is where we display either one or allBots

  state = {
    clicked: false,
    currentBot: {}
  }

  viewOneBot = () => {
    return <BotSpecs 
              bot={this.state.currentBot} 
              key={this.state.currentBot.id} 
              addBot={this.props.addBot} 
              toggleView={this.toggleView}
            />
  }

  toggleView = (bot) => {
    this.setState({
      clicked: !this.state.clicked,
      currentBot: bot
    })
  }

  generateAllBots = () => {
    return this.props.allBots.map(bot => {
      return <BotCard 
                bot={bot} 
                key={bot.id} 
                deleteBot={this.props.deleteBot} 
                handleCardClick={this.toggleView} 
                addOrRemoveBot={this.props.addBot}
              />
    })
  }
  
  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.state.clicked ? this.viewOneBot() : this.generateAllBots()}
        </div>
      </div>
    );
  }
}

export default BotCollection;
