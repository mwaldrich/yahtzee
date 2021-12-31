import React, { Component } from 'react';
import './Roll.css'; // Tell webpack that Button.js uses these styles

class Goal extends Component {
  render() {
      // You can use them as regular CSS styles
      return <>
            <div className="roll">
                <div className="dieTitle"><br/></div>
                <div className="die">&#x2684;</div>
                <div className="die">&#x2684;</div>
                <div className="die">&#x2684;</div>
                <div className="die">&#x2684;</div>
                <div className="die">&#x2684;</div>
                <div className="dieTitle">Play</div>
                <div className="dieTitle">Goal</div>
            </div>
      </>;
  }
}

export default Goal;
