import React, { Component } from 'react';
import './Roll.css'; // Tell webpack that Button.js uses these styles

class Roll extends Component {
  render() {
      // You can use them as regular CSS styles
      return <>
            <div className="roll">
                <div className="die">&#x2684;</div>
                <div className="die">&#x2684;</div>
                <div className="die">&#x2684;</div>
                <div className="die">&#x2684;</div>
                <div className="die">&#x2684;</div>
            </div>
      </>;
  }
}

export default Roll;
