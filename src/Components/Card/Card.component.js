import React from 'react'
import '../Card/Card.style.css'

const Card = (props) => {
    return (
        <div className='card-container'>
            <img alt='monster' src={`http://robohash.org/${props.monster.id}?set=set2`}></img>
            <h1>{props.monster.name}</h1>
            <p>{props.monster.email}</p>
        </div>
    )
}

export default Card