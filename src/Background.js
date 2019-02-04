import React, { Component } from 'react';
import './App.css';


class Background extends Component {

  changeHue(degree){
    //let degree = 90;
    let filterString = "hue-rotate(" +degree +"deg)"
    return {filter: filterString};
  }

  render() {
    return (
      <div className="backgrounds" style={this.changeHue(this.props.hue)}>
        <img src={this.props.imageSrc} alt="background" 
    style={{position: 'absolute', height: 600, width: 1600, top: this.props.top, left: this.props.left}}/>
    <img src={this.props.imageSrc} alt="background" 
    style={{position: 'absolute', height: 600, width: 1600, top: this.props.top, left: this.props.left-1600}}/>
    <img src={this.props.imageSrc} alt="background" 
    style={{position: 'absolute', height: 600, width: 1600, top: this.props.top, left: this.props.left+1600}}/>
      </div>
    );
  }
}

//<img src={backgroundImage} alt="bg_image" height="600" width="800"/>

export default Background;

/*

<div>
<img src={backgroundImage} className="img" alt="background" 
    style={{position: 'absolute', top: this.props.top, left: this.props.left}}/>
</div>

/*Filter styles*/
/*
.saturate { filter: saturate(3); }
.grayscale { filter: grayscale(100%); }
.contrast { filter: contrast(160%); }
.brightness { filter: brightness(0.25); }
.blur { filter: blur(3px); }
.invert { filter: invert(100%); }
.sepia { filter: sepia(100%); }
.huerotate { filter: hue-rotate(180deg); }
.rss.opacity { filter: opacity(50%); }
*/