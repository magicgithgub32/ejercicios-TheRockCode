import "./App.css";
import FavoriteMovie from './components/FavoriteMovie';
import MovieList from "./components/MovieList";
import NormalMovie from './components/NormalMovie';

function App() {
  const movies = [
    {
      title: "Avatar 10: más 3D",
      year: 2028,
      isFavorite: true
    },
    {
      title: "Titanic 2: el gran iceberg",
      year: 2026,
      isFavorite: false
    },
    {
      title: "Terminator Infinite",
      year: 2027,
      isFavorite: false
    },
    {
      title: "Rocking the code",
      year: 2022,
      isFavorite: true
    }
  ]

  return (
    <div className="App">
      <MovieList movies={movies} />
      
      <FavoriteMovie title={movies.title} year={movies.year} />

      <NormalMovie title={movies.title}/>

      {movies.map((movie) => {
        (isFavorite ? {FavoriteMovie} : {NormalMovie}) 
      })}

    
    </div>
  )
}

export default App;
