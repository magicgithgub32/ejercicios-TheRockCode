import React from 'react'

const FavoriteMovie2 = (props) => {
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

export default FavoriteMovie2