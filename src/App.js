
import './App.css';
import data from './assets/data.json'
import CharacterCard from './Components/CharacterCard';

/*

*/
function App() {
  return (
    <div className="App">
        <div className='title'>
          <h1>Rick & Morty</h1>
          <h2>The Character Card edition</h2>
        </div>
      <header className="App-header">
        {data.map(item => 
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
