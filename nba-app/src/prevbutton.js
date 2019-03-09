import React from 'react';
import './scss/App.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowLeft)

const PrevButton = (props) => {
    return(
      <button className="pwdBtn" style={{display: props.buttonDispl}} onClick={props.prevSlide}><FontAwesomeIcon icon={faArrowLeft}/> </button>
    )
  }
  export default PrevButton;

  