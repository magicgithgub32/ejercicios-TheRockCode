import './App.css'
import { useEffect, useState } from 'react'

function App() {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch(`https:rickandmortyapi.com/api/character`)
    .then((res) => res.json())
    .then((response) => {
      setCharacters (response.results)
    })
  }, [])

console.log(characters)
  
return (
  <div className="App">
    {characters.map((character) => (
      <div key={character.id}>
        <h2>{character.name}</h2>
        <p>{character.species}</p>
        <img src={character.image} alt={character.name} />
      </div>
    ))}
  </div>
)  
}

export default App
