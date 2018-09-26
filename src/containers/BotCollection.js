import React from "react";
import BotCard from "../components/BotCard";

const BotCollection = props => {
  // const botSelected = bot =>
  //   props.selectedBot.find(chosenBot => chosenBot.id === bot.id);

  const handleClick = fn => event => fn();

  return (
    <div className="ui four column grid">
      <div className="row">
        {props.bots.map(bot => (
          <BotCard
            botTransaction={props.botTransaction}
            key={bot.id}
            bot={bot}
            selectedBot={props.selectedBot}
            handleBotDisplay={props.handleBotDisplay}
          />
        ))}
      </div>
    </div>
  );
};

// class BotCollection extends React.Component {
//   //your code here
//
//   botSelected = bot =>
//     this.props.selectedBot.find(chosenBot => chosenBot.id === bot.id);
//
//   handleClick = fn => event => fn();
//
//   render() {
//     // debugger;
//     console.log(this.props);
//     return (
//       <div className="ui four column grid">
//         <div className="row">
//           {/*...and here..*/
//           this.props.bots.map(bot => (
//             <BotCard
//               botTransaction={this.props.botTransaction}
//               key={bot.id}
//               bot={bot}
//               selectedBot={this.botSelected(bot)}
//             />
//           ))}
//           Collection of all bots
//         </div>
//       </div>
//     );
//   }
// }

export default BotCollection;
