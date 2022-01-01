import React, { Component } from 'react';
import Dice from './Dice.js';
import NextTurn from './NextTurnButton.js';
import './ProgressBar.css'; 

class ProgressBar extends Component {
  render() {
      return <>
      <div className="prog">
        <h4>Calculate: </h4>
        <div className="diceRoll">
            <Dice />
            <Dice />
        </div>
        <NextTurn {...this.props} />
      </div>
      </>;
  }
}

export default ProgressBar;
