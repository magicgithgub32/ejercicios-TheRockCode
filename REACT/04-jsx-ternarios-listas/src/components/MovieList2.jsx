import React from 'react'

const MovieList2 = (props) => {
  return (
    <div>
         <ul>{props.movies.map((movie) => {
            return <li key={movie.title}>{movie.title}</li>
         })}</ul>
    </div>
  )
}

export default MovieList2