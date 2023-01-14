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

  <div>

    <MovieList movies={movies}/>


  </div>
)


}

export default App;




// import "./App.css";
// import FavoriteMovie2 from './components/FavoriteMovie2';
// import MovieList2 from './components/MovieList2';
// import NormalMovie2 from './components/NormalMovie2';


// function App() {


//   const movies = [
//     {
//       title: 'Avatar 10: más 3D',
//       year: 2028,
//       isFavorite: true,
//     },
//     {
//       title: 'Titanic 2: el gran iceberg',
//       year: 2026,
//       isFavorite: false,
//     },
//     {
//       title: 'Terminator Infinite',
//       year: 2027,
//       isFavorite: false,
//     },
//     {
//       title: 'Rocking the code',
//       year: 2022,
//       isFavorite: true,
//     },
//   ];

//   return (
//     <div>
      
//       <MovieList2 movies={movies}/>
//       <FavoriteMovie2 title={movies.title} year={movies.year} />
//       <NormalMovie2 title={movies.title} />



//     </div>
//   )
// }





// export default App;
