import React, { Component } from 'react';
import './scss/App.scss';
import Button from './button';
import PrevButton from './prevbutton'
import Slide from './slide';

export class Slider extends Component {
  constructor(props){
    super(props);
    this.state={
      currentIndex: 0,
      translateValue: 0,
      buttonTxt: "FOR-WARD!",
      buttonDispl: "none",
      ids: ["202710", "201939", "203081", "203076", "201942", "1717", "101108", "200755",  "202695", "201939", "202681", "2544", "200765", "201565",
      "201566", "1713" ],
      names: ["Jimmy BUTLER", "Stephen CURRY", "Damian LILLARD","Anthony DAVIS", "DeMar DEROZAN", "Dirk NOVITZKY", "Chris PAUL",
      "James HARDEN", "JJ REDICK", "Kawhi LEONARD", "Kyrie IRVING", "LeBron JAMES", "Rajon RONDO", "Derrick ROSE", "Russel WESTBROOK", "Vince CARTER"],
      randomPlayer: Math.floor(Math.random() * 15),
    }
  }
  slideWidth =()=> {
    return document.querySelector('.slider').clientWidth
 }

 prevSlide =()=> {
  if(this.state.currentIndex > 0)
  this.setState(prevState => ({
    currentIndex: prevState.currentIndex - 1,
    translateValue: prevState.translateValue + this.slideWidth(),
  }))
}
  nextSlide=()=>{
    if(this.state.currentIndex < 4){
     this.setState(prevState => ({
       currentIndex: prevState.currentIndex + 1,
       translateValue: prevState.translateValue + - this.slideWidth(),
       buttonDispl: "block",
      }))

    }else if (this.state.currentIndex === 4){
      this.setState(prevState =>({
        currentIndex: prevState.currentIndex + 1,
        buttonTxt: "START AGAIN?",
        buttonDispl: "block",
      }))
    } else if (this.state.currentIndex > 4){
      this.setState({
        currentIndex: 0,
        translateValue: 0,
        buttonTxt: "FOR-WARD!",
      })
    }
  }
  render(){
    return(
      <div className="slider">
      <Slide translateValue={this.state.translateValue} ids ={this.state.ids} names={this.state.names} randomPlayer={this.state.randomPlayer}/>
      <Button nextSlide={this.nextSlide} buttonTxt={this.state.buttonTxt}/>
      <PrevButton prevSlide={this.prevSlide} buttonDispl={this.state.buttonDispl} />
       </div>
    )
  }
}

export default Slider;