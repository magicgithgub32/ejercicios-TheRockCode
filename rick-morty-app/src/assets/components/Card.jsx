import React from 'react'

const Card = ({ character }) => {
    
  return (
    <div>
        <h2>{character.name}</h2>
        <p>id: {character.id}</p>
        <p>status: {character.status}</p>
        <img src={character.image} alt={character.name}/>
        </div>
  )
}

export default Card