import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  state = {
    bots: [],
    botIndex: 0,
    selectedBot: [],
    loading: true,
    armyBots: []
  };

  selectedBot = bot =>
    this.state.selectedBot.find(chosenBot => chosenBot.id === bot.id);

  botSet = () =>
    this.state.bots.slice(this.state.botIndex, this.state.botIndex + 4);

  getMoreBots = () => {
    this.setState(prevState => ({
      botIndex: prevState.botIndex + 4
    }));
  };

  botTransaction = bot => {
    if (!this.selectedBot(bot)) {
      this.setState(prevState => ({
        selectedBot: [...prevState.selectedBot, bot],
        armyBots: bot
      }));
    }
  };

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(response => response.json())
      .then(data => {
        this.setState({
          bots: data,
          selectedBot: data[0],
          loading: false
        });
      });
  }

  handleBotDisplay = (event, bot) => {
    // debugger;
    event.preventDefault();
    this.setState({
      selectedBot: bot
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.loading ? (
          <div>Loading... </div>
        ) : (
          <div>
            <BotCollection
              bots={this.botSet()}
              handleBotDisplay={this.handleBotDisplay}
              botTransaction={this.botTransaction}
            />
            <YourBotArmy
              selectedBot={this.state.selectedBot}
              armyBots={this.state.armyBots}
            />
          </div>
        )}
      </div>
    );
  }
}

export default BotsPage;
