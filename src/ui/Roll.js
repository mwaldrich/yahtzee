import React, { Component } from 'react';
import './Roll.css'; // Tell webpack that Button.js uses these styles
import { playToString } from './utils';

class Roll extends Component {
  render() {
    console.log(`Rolls Left in Roll: this.props = ${this.props.rollsLeft}`)
    this.die = ["\u2680","\u2681","\u2682","\u2683","\u2684","\u2685"]
      // You can use them as regular CSS styles
      //make the following dice a react element
    this.rl = this.props.rollsLeft
    // make it clearer that the turn is over
    if(this.rl === 3){
      this.rl = "\nTurn Over"
    }
      return <>
            <div className="roll">
                <div className="dieTitle"><b>Roll</b></div>
                <div className="diePlay"><i>{playToString(this.props.currentPlay)}</i></div>
                <div className="rollsRemaining">Left: {this.rl}</div>
                <div class={`die ${this.props.keepmask[0] == false ? "reroll" : ""}`}>
                  {this.die[this.props.currentRoll[0]-1]}
                </div>
                <div class={`die ${this.props.keepmask[1] == false ? "reroll" : ""}`}>
                  {this.die[this.props.currentRoll[1]-1]}
                </div>
                <div class={`die ${this.props.keepmask[2] == false ? "reroll" : ""}`}>
                  {this.die[this.props.currentRoll[2]-1]}
                </div>
                <div class={`die ${this.props.keepmask[3] == false ? "reroll" : ""}`}>
                  {this.die[this.props.currentRoll[3]-1]}
                </div>
                <div class={`die ${this.props.keepmask[4] == false ? "reroll" : ""}`}>
                  {this.die[this.props.currentRoll[4]-1]}
                </div>
            </div>
      </>;
  }
}

export default Roll;
