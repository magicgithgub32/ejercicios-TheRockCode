import React from 'react'
import FavoriteMovie2 from './FavoriteMovie2'
import NormalMovie2 from './NormalMovie2'

const MovieList2 = (props) => {

    return (
        <div>
          <ul>
            {props.movies.map((movie) => {
              return <li key={movie.title}>{movie.isFavorite ? <FavoriteMovie title={movie.title} year={movie.year}/> : <NormalMovie title={movie.title} />} </li>
                
            })}
          </ul>
        </div>
      );
}

export default MovieList2