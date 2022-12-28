import React from 'react'

const NormalMovie = (props) => {
  return (
    <div>
        {props.movies.map((movie) => {
          return <p key={movie.title}>{movie.title} Película no favorita❌</p>
        })}
    </div>
  )
}

export default NormalMovie