import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

const movies = [
  { id: 1, title: "The Shawshank Redemption", genre: "Drama" },
  { id: 2, title: "The Godfather", genre: "Drama" },
  { id: 3, title: "The Godfather: Part II", genre: "Drama" },
  { id: 4, title: "The Dark Knight", genre: "Action" },
  { id: 5, title: "Pulp Fiction", genre: "Thriller" },
];

const genres = [
  { id: 1, name: "All" },
  { id: 2, name: "Drama" },
  { id: 3, name: "Action" },
  { id: 4, name: "Thriller" },
];

function App() {
  const [newListOfMovies, setNewListOfMovies] = useState(movies);

  const [wantedGenres, setWantedGenres] = useState(genres);

  useEffect(() => {
    const desiredMovies = (wantedGenres.name === "All"
        ? movies
        : movies.filter((movie) => movie.genre === wantedGenres.name)
    );
    setNewListOfMovies(desiredMovies)
  }, [wantedGenres]);


  return (
    <div>
      <h1>Movies</h1>
      
      <select
        value={wantedGenres.id}
        onChange={(event) =>
          setWantedGenres(
            genres.find((genre) => genre.id === event.target.value)
          )
        }
      >
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
      <ul>
        {newListOfMovies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

