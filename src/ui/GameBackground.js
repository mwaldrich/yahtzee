import React, { Component } from 'react';
import './GameBackground.css'; // Tell webpack that Button.js uses these styles

class GameBackground extends Component {
  render() {
    // You can use them as regular CSS styles
    return <div class="lines">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>;
  }
}

export default GameBackground;