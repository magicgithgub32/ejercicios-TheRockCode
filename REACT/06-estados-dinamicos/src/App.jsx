import "./App.css";
import { useState } from 'react';


const initialCharacters = [

  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    origin: "Earth (C-137)",
    location: "Citadel of Ricks",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  },

  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    origin: "Earth (C-137)",
    location: "Citadel of Ricks",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  },

  {
    id: 3,
    name: "Summer Smith",
    status: "Alive",
    species: "Human",
    origin: "Earth (Replacement Dimension)",
    location: "Earth (Replacement Dimension)",
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
  },
];


function App() {

const [ characters, setCharacters ] = useState(initialCharacters)

  
const handleAddCharacter = () => {
  const newCharacter = {
    id: Date.now(),
    name: 'Mr. Meeseeks',
    status: 'unknown',
    species: 'Humanoid',
    type: 'Meeseeks',
    origin: 'Mr. Meeseeks Box',
    location: 'Earth',
    image:
      'https://rickandmortyapi.com/api/character/avatar/242.jpeg',
  };

  setCharacters([...characters, newCharacter])
}

const handleDeleteCharacter = (id) => {
  
  const characterToDelete = characters.filter(character => character.id === id[0]);

  characters = characters.filter(character => character.id !== id)

  setCharacters([...characters, characterToDelete])

}

  return (
    <div className="character-card">
      {characters.map((character, id) => {
        return (
        <div key={id}>
        <h3>{character.name}</h3>
        <p>Estado: {character.status}</p>
        <p>Vive en {character.location}</p>
        <img src={character.image} width="200" height="200"/>
        <button onClick={handleDeleteCharacter(id)}>Delete this character</button>
        </div>
        )
      })}
      <button onClick={handleAddCharacter}>Add a new character</button>

    </div>
  )
  
}

export default App;
