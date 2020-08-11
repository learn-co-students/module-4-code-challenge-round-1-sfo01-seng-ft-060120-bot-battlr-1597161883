import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import SortBar from "./SortBar";

class BotsPage extends Component {
  //start here with your code for step one
  state = {
    bots: [],
    botArmy: [],
    sortByMethod: ""
  }

  componentDidMount(){
    fetch('http://localhost:6001/bots')
    .then(res => res.json())
    .then(json => this.setState({
      bots: json,
    }))
  }

  addToBotArmy = (bot) => {
    if (!this.state.botArmy.includes(bot)){
      let botArmy = [...this.state.botArmy, bot]
      this.setState({ botArmy })
    }
  }

  removeFromBotArmy = (selectedBot) => {
    let botArmy = this.state.botArmy.filter(bot => bot !== selectedBot)
    this.setState({ botArmy })
  }

  dischargeBot = (selectedBot) => {    
    let bots = this.state.bots.filter(bot => bot !== selectedBot)
    this.setState({ bots })

    fetch(`http://localhost:6001/bots/${selectedBot.id}`, {
      method: 'DELETE',
    })
  }

  componentDidUpdate(previousProps, previousState){
    if (previousState.bots !== this.state.bots) {
      let bot = previousState.bots.filter(x => !this.state.bots.includes(x))
      this.removeFromBotArmy(bot[0])
    }
  }

  handleSort = (e) =>{
    if (e.target.value === 'health') {
      let bots = this.state.bots.sort((a,b) => a.health - b.health)
      this.setState({ bots })
    } else if (e.target.value === 'damage') {
      let bots = this.state.bots.sort((a,b) => a.damage - b.damage)
      this.setState({ bots })
    } else if (e.target.value === 'armor') {
      let bots = this.state.bots.sort((a,b) => a.armor - b.armor)
      this.setState({ bots })
    }
  }

  render() {
    return <div>
      <YourBotArmy botArmy={this.state.botArmy} removeFromBotArmy={this.removeFromBotArmy}/>
      <SortBar handleSort={this.handleSort} sortByMethod={this.state.sortByMethod}/>
      <BotCollection bots={this.state.bots} addToBotArmy={this.addToBotArmy} dischargeBot={this.dischargeBot}/>
      </div>;
  }
}

export default BotsPage;
