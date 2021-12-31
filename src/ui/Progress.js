import React, { Component } from 'react';
import Calculating from './CalculatingButton.js';
import Dice from './Dice.js';
import NextTurn from './NextTurnButton.js';
import './Progress.css'; 

class Progress extends Component {
  render() {
      return <>
      <div className="prog">
        <h4>Calculating: </h4>
        <progress id="calc" value="32" max="100"> 32% </progress>
        <div className="diceRoll">
            <Dice />
            <Dice />
        </div>
        <Calculating />
        <NextTurn />
      </div>
      </>;
  }
}

export default Progress;
