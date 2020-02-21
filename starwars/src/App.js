import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import CharacterCard from './CharaterCard';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [ characters, setCharacters] = useState([]);
  useEffect(()=>{
    axios.get('https://swapi.co/api/people/').then(res => setCharacters(res.data.results)).catch(err => console.log(err))

  }, [])
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
console.log(characters)
  return (
    <div className='App'>
      <h1 className='Header'>React Wars</h1>
      {characters.map(character => (<CharacterCard name={character.name} height={character.height} mass={character.mass} birth_year={character.birth_year}/>))}
    </div>
  );
}

export default App;
