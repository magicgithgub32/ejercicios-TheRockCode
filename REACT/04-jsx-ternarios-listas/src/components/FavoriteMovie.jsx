import React from 'react'

const FavoriteMovie = (props) => {
  return (
    <div>
      {props.movies.map((movie) => {
          return (
            <ul> 
          <li
            key={movie.title}>{movie.title}
          </li>
          <li
          key={movie.year}>{movie.year}
        </li>
        </ul>
          )})}
    </div>
      )}

export default FavoriteMovie

