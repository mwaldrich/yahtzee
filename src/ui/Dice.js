import React, { Component } from 'react';
import './Dice.css'; 

class Dice extends Component {
  render() {
      // You can use them as regular CSS styles
      return <>
      <div className={this.props.myTurn ? 'spun' : 'notspin'}>
       <p>&#x2681;</p>
      </div>
      </>;
  }
}

export default Dice;