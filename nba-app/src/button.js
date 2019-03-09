import React from 'react';
import './scss/App.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketballBall } from '@fortawesome/free-solid-svg-icons';

library.add(faBasketballBall)

const Button = (props) => {
    return(
      <button className="fwdBtn" onClick={props.nextSlide} txt={props.buttonTxt}>{props.buttonTxt} <FontAwesomeIcon icon={faBasketballBall} spin/> </button>
    )
  }
  export default Button;

  