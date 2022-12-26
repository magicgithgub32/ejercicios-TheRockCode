import React from "react"

const MovieList = (props) => {
  return ( 
  <div>
    <h3>{props.movies}</h3>

    <ul> {props.movies((movie) => {
        return <li key={movie}>{movie}</li>
    })}
    </ul>
    </div>
  )
}

export default MovieList

