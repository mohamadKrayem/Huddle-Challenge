import React from 'react'
import './Card.scss';

const Card = ( props ) => {
  return (
    <div className="card" id={props.id}>
      <img src={props.src} alt={props.alt}/>
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Card