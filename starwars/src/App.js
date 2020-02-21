import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import CharacterCard from './CharaterCard';
import styled from 'styled-components';

const ContainerDiv = styled.div`
display:flex;
flex-wrap: wrap;
justify-content:space-around;
`
const WarsHeader = styled.h1`
width:100%;
text-align:center;
color: white;
font-size: 3rem;
text-shadow: -2px -2px 0 #000, 2px 2px 0 #000, 0 -2px 0 #000,
0 2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 0 0 #000,
-2px 0 0 #000; 
background-color: white;
padding: 1.5rem;
border-radius: 10px;
border: black solid 2px; 
margin: .5rem 1rem;
opacity: .7;
`

const App = () => {

  const [ characters, setCharacters] = useState([]);

  useEffect(()=>{
    axios.get('https://swapi.co/api/people/').then(res => setCharacters(res.data.results)).catch(err => console.log(err))

  }, [])

  return (
    <ContainerDiv>
      <WarsHeader>React Wars</WarsHeader>
      {characters.map((character, index) => (<CharacterCard key={index} name={character.name} height={character.height} mass={character.mass} birth_year={character.birth_year}/>))}
    </ContainerDiv>
  );
}

export default App;
