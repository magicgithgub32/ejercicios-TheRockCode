import React from 'react'
import FavoriteMovie2 from './FavoriteMovie2'
import NormalMovie2 from './NormalMovie2'

const MovieList2 = (movies) => {
  return (
    <div>{movies.map((movie) => {
        return (
            movie.isFavorite === 'true' ? FavoriteMovie2 : NormalMovie2
        )
    })}</div>
  )
}

export default MovieList2