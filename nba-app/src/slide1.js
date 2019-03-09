import React from 'react';
import './scss/App.scss';
import Logo from './images/logo.png';

const Slide1 = () =>{
  return ( 
  <div className="slide1">
    <p className="leftText">COMPARE YOURSELF</p>
    <p className="rightText">TO THE BIGGEST</p>
      <div className="logoContainer">
     <img className= "logo" alt="NBA_logo" src={Logo}></img>
      <p style={{display:"inline-block"}}>STARS!</p>
    </div>
  </div>
  )
  }

export default Slide1;