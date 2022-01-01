
import React, { Component } from 'react';
import './NextTurnButton.css'; 
import Calculating from './CalculatingButton';

class NextTurn extends Component {

  constructor(props) {
    super(props);
  }

  buttonLogic() {
    //button text given rolls left
    if(this.props.rollsLeft == 0) {
      return "Submit"
    } else if(this.props.rollsLeft == 3) {
      return "Next Turn"
    } else {
      return "Re-Roll"
    }
  }

  render() {
      console.log(`NextTurnButton: this.props = ${JSON.stringify(this.props)}`);
      // You can use them as regular CSS styles
      if(!this.props.myTurn){
        return <>
          <button className="nextturn" onClick={() => this.props.nextTurn()}><b>{this.buttonLogic()}</b></button>
        </>;
      } else {
        return <>
          <Calculating />
        </>
      }
  }
}
export default NextTurn;