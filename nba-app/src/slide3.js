import React, { Component } from 'react';
import './scss/App.scss';


export class Slide3 extends Component {
  render(){
return(
      <div className="slide3"> 
       <h1 className="headline">YOUR STATS PER GAME</h1>
       <h2 className="headline2">ATTACK:</h2>
       <div className="statsContainer">
         <div className="inputContainer">
          <span>POINTS</span>
          <input  type="number" value={this.props.pointsVal} min="0" step="1" onChange={this.props.getPoints}></input>
        </div>
      <div className="inputContainer">
        <span>THREE POINTERS</span>
        <input  type="number" value={this.props.threePointersVal} min="0" step="1"onChange={this.props.getThrees}></input>
       </div>
     <div className="inputContainer">
       <span> FREE THROWS</span>
       <input type="number" value={this.props.freeThrowsVal} min="0" step="1"onChange={this.props.getFree}></input>
      </div> 
     <div className="inputContainer">
       <span>ASSISTS</span>
       <input type="number" value={this.props.assistsVal} min="0" step="1"onChange={this.props.getAssists}></input>
      </div> 
     </div>

      </div>
    )
  }
}

export default Slide3;