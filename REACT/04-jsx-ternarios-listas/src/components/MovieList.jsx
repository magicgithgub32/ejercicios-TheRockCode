import React from "react"

const MovieList = (props) => {
  return ( 
  <div>
    <h3>{props.movies}</h3>

    <ul> {props.movies.map((movie) => {
        return <li key={movie.title}>{movie.title}</li>
    })}
    </ul>
    </div>
  )
}

export default MovieList

