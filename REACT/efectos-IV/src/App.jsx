import { useEffect } from 'react';
import { useState } from 'react'
import './App.css'



const movies = [
  { id: 1, title: 'The Shawshank Redemption', genre: 'Drama' },
  { id: 2, title: 'The Godfather', genre: 'Drama' },
  { id: 3, title: 'The Godfather: Part II', genre: 'Drama' },
  { id: 4, title: 'The Dark Knight', genre: 'Action' },
  { id: 5, title: 'Pulp Fiction', genre: 'Thriller' },
];

const genres = [
  { id: 1, name: 'All' },
  { id: 2, name: 'Drama' },
  { id: 3, name: 'Action' },
  { id: 4, name: 'Thriller' },
];


function App() {

const [ listOfMovies, setListOfMovies ] = useState([movies, genres])


useEffect(() => {
  const handleSelectedMovies = (id) => {
  const selectedMovies = movies.filter((movie) => movie.genre === genre);
  setListOfMovies(selectedMovies);
};
}, [listOfMovies])


  return (
    <div className="App">
      
        {/* <p>{selectedMovies}</p> */}

        <button onClick={() => handleSelectedMovies(movies.genre)}></button>
      
       </div>
  )
}

export default App
