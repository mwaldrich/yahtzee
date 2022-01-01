import React, { Component } from 'react';
import './Roll.css'; // Tell webpack that Button.js uses these styles
import { playToString } from './utils';

class Roll extends Component {
  render() {
    console.log(`Rolls Left in Roll: this.props = ${this.props.rollsLeft}`)
    this.die = ["\u2680","\u2681","\u2682","\u2683","\u2684","\u2685"]
      // You can use them as regular CSS styles
      //make the following dice a react element
      return <>
            <div className="roll">
                <div className="dieTitle">RL: {this.props.rollsLeft}</div>
                <div className="die">{this.die[this.props.currentRoll[0]-1]}</div>
                <div className="die">{this.die[this.props.currentRoll[1]-1]}</div>
                <div className="die">{this.die[this.props.currentRoll[2]-1]}</div>
                <div className="die">{this.die[this.props.currentRoll[3]-1]}</div>
                <div className="die">{this.die[this.props.currentRoll[4]-1]}</div>
                <div className="dieTitle">{playToString(this.props.currentPlay)}</div>
                <div className="dieTitle">Roll</div>
            </div>
      </>;
  }
}

export default Roll;
