import React, { Component } from "react";
import BotCard from '../components/BotCard'
import SortBar from '../components/SortBar'

class BotCollection extends Component {
  //your code here

  state = {
    displayBots: [...this.props.allBots]
  }

  generateBots = (array) => {
    return array.map(bot => {
      return <BotCard 
                bot={bot} 
                key={bot.id} 
                deleteBot={this.props.deleteBot} 
                handleCardClick={this.props.toggleView}
              />
    })
  }

  handleFilter = (filterName) => {
    let displayBots
    if(filterName === 'health'){
      displayBots = this.props.allBots.sort((a, b) => a.health - b.health)
      this.setState({ 
        displayBots
      })
    } 
    else if (filterName === 'damage'){
      displayBots = this.props.allBots.sort((a, b) => a.damage - b.damage)
      this.setState({ 
        displayBots
      })
    } 
    else if (filterName === 'armor') {
      displayBots = this.props.allBots.sort((a, b) => a.armor - b.armor)
      this.setState({ 
        displayBots
      })
    }
  }

  render() {
    console.log(this.props.allBots)
    return (
      <div className="ui four column grid">
        <SortBar handleFilter={this.handleFilter}/>
        <div className="row">
          {this.generateBots(this.props.allBots)}
        </div>
      </div>
    );
  }
}

export default BotCollection;
