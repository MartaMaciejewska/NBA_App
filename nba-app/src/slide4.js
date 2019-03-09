import React, { Component } from 'react';
import './scss/App.scss';

export class Slide4 extends Component {

  render(){
return(
      <div className="slide4"> 
      <h1 className="headline">YOUR STATS PER GAME</h1>
      <h2 className="headline2">DEFENCE:</h2>
      <div className="statsContainer">
      <div className="inputContainer">
        <span>BLOCKS</span>
        <input value={this.props.blocksVal} type="number" min="0" step="1" onChange={this.props.getBlocks}></input>
       </div>
      <div className="inputContainer">
        <span>DEFENSIVE REBOUNDS</span>
        <input value={this.props.reboundsVal} type="number" min="0" step="1" onChange={this.props.getRebs}></input>
      </div>
     <div className="inputContainer">
       <span>STEALS</span>
       <input value={this.props.stealsVal} type="number" min="0" step="1" onChange={this.props.getSteals}></input>
      </div> 
     </div>
</div>
    )
  }
}

export default Slide4;