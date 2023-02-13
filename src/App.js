
import './App.css';
/*import data from './assets(unused)/data.json'*/
import CharacterCard from './Components/CharacterCard';
import axios from "axios"
import React, {useEffect, useState} from "react"

function App() {
  const [characters, setCharacters] = useState([])
	
	useEffect(() => {
		axios.get(`https://rickandmortyapi.com/api/character/${[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]}`)
			.then((element) => {
				setCharacters(element.data);
			})
	}, [])

  return (
    <div className="App">
        <div className='title'>
          <h1>Rick & Morty</h1>
          <h2>The Character Card edition</h2>
        </div>
      <header className="App-header">
        {characters.map(item => 
        <CharacterCard 
          name = {item.name}
          image = {item.image}
          status = {item.status}
          species = {item.species}
          lastLocation = {item.location}
          episode = {item.episode[0]}
          origin = {item.origin.name}
        />)}
      </header>
    </div>
  );
}

export default App;
