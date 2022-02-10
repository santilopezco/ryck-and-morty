import React from 'react';
import './Card.css'

function Card({name,image,species,key}){
    return(
        <div className='cont_card'>
            <img 
            src={image}
            alt={name}
            />
            <h2>{name}</h2>
            <p>{species}</p>
           
        </div>
    )
}

export default Card