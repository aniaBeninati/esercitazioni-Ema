import React from 'react';
import '../styles/card.css';

const Card = (props) => {
    return (
      <div className="card">
        <img src={props.cat.image} alt={props.cat.name} />
        <h2>{props.cat.name}</h2>
        <p>{props.cat.description}</p>
        <p><strong>Origin:</strong> {props.cat.origin}</p>
        <p><strong>Temperament:</strong> {props.cat.temperament}</p>
      </div>
    );
  };
  

export default Card;