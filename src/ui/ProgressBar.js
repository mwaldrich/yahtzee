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
            <Dice class="left" {...this.props} />
            <Dice class="right" {...this.props} />
        </div>
        <NextTurn {...this.props} />
        <div class="desc2">
          <br/>
          <p><span class='red die2'>&#x2684;</span>: The AI is rerolling it</p>
          <br/>
          <p><span class='die2'>&#x2682;</span>: The AI is keeping it</p>
          <br/>
          <hr/>
          <p class="sig">User Interface: Spar0w</p>
          <p class="sig">Backend/AI: Mark Aldrich</p>
          <p class="sig"><a href="https://github.com/mwaldrich/yahtzee">Source</a></p>
          <p class="sig">Made with ❤️ in Vermont</p>
        </div>
      </div>
      </>;
  }
}

export default ProgressBar;
