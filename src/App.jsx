import './App.css';
import { characters } from './data.json';
import { Card, Container, Grid, Image } from 'semantic-ui-react';
import MemoryCard from './components/MemoryCard';

function App() {

  return (    
    <Grid columns={3}>
      <div className="container"> 
      {
        characters.map(char => (
          <MemoryCard key={char.id} character={char} />
        ))
      }
      </div>
    </Grid>

      
  )
}

export default App
