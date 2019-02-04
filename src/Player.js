import React, { Component } from 'react';
import player from './images/mario.png';

class Player extends Component {
  
  render() {
    return (
      <div>
            <img src={player} className="Player" alt="player" 
            style={{width: 100, height: 100, position: 'absolute', top: this.props.top, left: this.props.left}}/>
      </div>
    );
  }
}

export default Player;
