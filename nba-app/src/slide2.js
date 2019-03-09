import React, { Component } from 'react';
import './scss/App.scss';
import butlerIMG from "./images/butler.jpg";
import curryIMG from "./images/curry.jpg";
import damianIMG from "./images/damian.jpg";
import davisIMG from"./images/davis.jpg";
import derozIMG from"./images/deroz.jpg";
import dirkIMG from "./images/dirk.jpg";
import cpIMG from"./images/cp3.jpg";
import hardenIMG from"./images/harden.jpg";
import jjIMG from "./images/jj.jpg";
import kawhiIMG from"./images/kawhi.jpg";
import kyrieIMG from "./images/kyrie.jpg";
import lebronIMG from "./images/lebron.jpg";
import rondoIMG from "./images/rondo.jpg";
import roseIMG from "./images/rose.jpg";
import russIMG from "./images/russ.jpg";
import vinceIMG from "./images/vince.jpg";

export class Slide2 extends Component {
  constructor(props){
    super(props);
    this.state={
      players: [
        butlerIMG, curryIMG, damianIMG, davisIMG, derozIMG, dirkIMG, cpIMG, 
        hardenIMG, jjIMG, kawhiIMG, kyrieIMG, lebronIMG, rondoIMG, roseIMG, russIMG, vinceIMG],
        names: props.names,
    }
  }

  render(){
    return(
      <div className="slide2">  
        <h1 className="headline">CHOOSE THE PLAYER:</h1>
        <h3 className="headlineSm">Chosen player: {this.props.chosenPlayerName}</h3>
        <div id="playersContainer">
        {
          this.state.players.map((picture, index) => {
            const ID = `player${index}`
            return (
              <div style={{backgroundImage: `url(${picture})`}} className="playerBox" key={index} id={ID} onClick={() => this.props.setID(index)}>
                <div className="hoverHeadline">
                <h2 className="playerName">{this.state.names[index]}</h2>
            
              </div>
              </div>
            )
          })
        }
        </div>
      </div>
    )
  }
}
export default Slide2;