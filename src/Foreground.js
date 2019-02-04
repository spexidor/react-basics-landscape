import React, { Component } from 'react';
import fgImage from './images/foreground_1.png';

class Foreground extends Component {
  
  render() {
    return (
      <div>
            <img src={fgImage} alt="player1" 
            style={{width: 800, height: 600, position: 'absolute', top: this.props.top, left: this.props.left}}/>
            <img src={fgImage} alt="player2" 
            style={{width: 800, height: 600, position: 'absolute', top: this.props.top, left: this.props.left-800}}/>
      </div>
    );
  }
}

export default Foreground;
