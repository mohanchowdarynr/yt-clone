import React from 'react'
import './card.css';

const Card = ({image,title,views}) => {
    return (
        <div className="card">
            <img src={image} alt="ntng"/>
            <h4>{title}</h4>
            <p>{views}</p>
        </div>
    )
}

export default Card
