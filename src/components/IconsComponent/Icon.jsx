import React from 'react';
import './Icon.scss';

const Icon = ( props ) => {
  return (
    <div className="IconContainer">
      <img src={props.src} alt="" className="Icon"/>
      <p>{props.description}</p>
    </div>
  )
}

export default Icon