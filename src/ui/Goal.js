import React, { Component } from 'react';
import './Roll.css'; // Tell webpack that Button.js uses these styles
import { playToString } from './utils';

class Goal extends Component {
  render() {
    console.log(`Goal: this.props = ${JSON.stringify(this.props)}`)
    this.die = ["\u2680","\u2681","\u2682","\u2683","\u2684","\u2685"]
      return <>
            <div className={`roll ${this.props.rollsLeft == 3 ? "final" : ""}`}>
                <div className={`dieTitle ${this.props.rollsLeft == 3 ? "final" : ""}`}><b>{this.props.rollsLeft == 3 ? "Final" : "Goal"}</b></div>
                <div className="diePlay"><i>{playToString(this.props.goalPlay)}</i></div>
                <div className="dieTitle"><br/></div>
                <div className="die">{this.die[this.props.goalRoll[0]-1]}</div>
                <div className="die">{this.die[this.props.goalRoll[1]-1]}</div>
                <div className="die">{this.die[this.props.goalRoll[2]-1]}</div>
                <div className="die">{this.die[this.props.goalRoll[3]-1]}</div>
                <div className="die">{this.die[this.props.goalRoll[4]-1]}</div>
            </div>
      </>;
  }
}

export default Goal;
