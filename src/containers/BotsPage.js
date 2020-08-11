import React, { Component } from "react";
import BotCollection from './BotCollection.js'
import YourBotArmy from './YourBotArmy.js'


class BotsPage extends Component {


  render() {
    return( 
    <div>
      <BotCollection bots={this.props.bots} />
      <YourBotArmy bots={this.props.bots} />
    </div>
    )
  }
}

export default BotsPage;
