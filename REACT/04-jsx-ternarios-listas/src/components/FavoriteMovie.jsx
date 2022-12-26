import React from 'react'

const FavoriteMovie = (props) => {
  return (
    <div>
        <h3>{props.title}</h3> <p>{props.year}</p>
    </div>
  )
}

export default FavoriteMovie