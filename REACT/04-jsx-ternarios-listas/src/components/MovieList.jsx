import React from "react";
import FavoriteMovie from "./FavoriteMovie";
import NormalMovie from "./NormalMovie";

const MovieList = (props) => {
  return (
    <div>
      <ul>
        {props.movies.map((movie) => {
          return <li key={movie.title}>{movie.isFavorite ? <FavoriteMovie title={movie.title} year={movie.year}/>: <NormalMovie title={movie.title} />} </li>
            
        })}
      </ul>
    </div>
  );
};

export default MovieList;
