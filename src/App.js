import React, { Component } from 'react';
import Foreground from './Foreground.js';
import Background from './Background.js';
import Player from './Player.js';
import './App.css';

import bg1 from './images/bg1.png';
import bg2 from './images/bg2_clouds.png';
import bg3 from './images/bg3.png';
import bg4 from './images/bg4.png';
import bg5 from './images/bg5.png';
import bg6 from './images/bg6.png';
import fg from './images/fg.png';

const sceneWidth = 1200; //match with clip box in App.css
const imageWidth = 1600;
//const sceneHeight = 600; //match with clip box in App.css

const maxPos = 1600;
const minPos = -1600 ; //minPos + scene < 2*imageWidth

const tickSpeed = 10; //update every 10ms

class App extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      time: 0,
      hue: 0,
      x_mouse: 0,
      y_mouse: 0,

      //bg1_pos: 0, //sky
      bg2_pos: 0, //clouds
      bg3_pos: 0, //mountains
      bg4_pos: 0,
      bg5_pos: 0,
      bg6_pos: 0,
      fg_pos:  0,
    }

    this.mouseFunction = this.mouseFunction.bind(this);
    //this.floatScene = this.floatScene.bind(this);
  }

  tick(){

    const cloudSpeed = 0.15;
    const middleSpeed = -0.15;
    const groundSpeed = -0.25;

      this.setState({
        time: this.state.time + tickSpeed,
        hue: this.rollHue(),
        bg2_pos: this.floatScene(this.state.bg2_pos, cloudSpeed), //clouds
        bg3_pos: this.floatScene(this.state.bg3_pos, -0.01) ,//mountains
        bg4_pos: this.floatScene(this.state.bg4_pos, middleSpeed),
        bg5_pos: this.floatScene(this.state.bg5_pos, middleSpeed),
        bg6_pos: this.floatScene(this.state.bg6_pos, middleSpeed),
        fg_pos: this.floatScene(this.state.fg_pos, groundSpeed),
      })
  }

  floatScene(pos, speed){
    let newPos = pos + speed; 

    //SCENE WIDTH: 1200
    //IMAGE WIDTH: 1600

    if(newPos < minPos)
      newPos = newPos + imageWidth;
    else if (newPos > maxPos)
      newPos = newPos - imageWidth;

    return newPos;
  }

  rollHue(){
    return (4*this.state.time/1000) %360;
  }

  componentDidMount(){
    //document.addEventListener("keydown", this.keyFunction, false);
    document.addEventListener("mousemove", this.mouseFunction, false);
     
    this.interval = setInterval(() => this.tick(), tickSpeed);
  }

  componentWillUnmount(){
    //document.removeEventListener("keydown", this.keyFunction, false);
    document.removeEventListener("mousemove", this.mouseFunction, false);
    clearInterval(this.interval);
  }

  mouseFunction(event){
    this.setState({
      x_mouse: event.screenX,
      y_mouse: event.screenY
    })
  }
  
  render() {
    return (
      <div className="App">
      
        <Background imageSrc={bg1} top={0} left={this.state.bg1_pos} hue={this.state.hue}/>
        <Background imageSrc={bg2} top={0} left={this.state.bg2_pos} hue={this.state.hue}/>
        <Background imageSrc={bg3} top={0} left={this.state.bg3_pos} hue={this.state.hue}/>
        <Background imageSrc={bg4} top={0} left={this.state.bg4_pos} hue={this.state.hue}/>
        <Background imageSrc={bg5} top={0} left={this.state.bg5_pos} hue={this.state.hue}/>
        <Background imageSrc={bg6} top={0} left={this.state.bg6_pos} hue={this.state.hue}/>
        <Background imageSrc={fg} top={0} left={this.state.fg_pos} hue={this.state.hue}/>
        
      </div>
    );
  }
}

export default App;