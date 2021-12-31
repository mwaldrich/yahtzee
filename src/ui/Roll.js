import React, { Component } from 'react';
import './Roll.css'; // Tell webpack that Button.js uses these styles

class Roll extends Component {
  render() {
      // You can use them as regular CSS styles
      //make the following dice a react element
      return <>
            <div className="roll">
                <div className="dieTitle">RL: 3</div>
                <div className="die">&#x2684;</div>
                <div className="die">&#x2684;</div>
                <div className="die">&#x2684;</div>
                <div className="die">&#x2684;</div>
                <div className="die">&#x2684;</div>
                <div className="dieTitle">Play</div>
                <div className="dieTitle">Roll</div>
            </div>
      </>;
  }
}

export default Roll;
