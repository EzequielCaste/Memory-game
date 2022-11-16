import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react';

const MemoryCard = ({ character, setCurrentPair, setFlipped }) => {
  const { id, image, flipped } = character;

  //const [flipped, setFlipped] = useState(false);

  function flipCard() {
    if(!flipped){
      setFlipped(id)
      setCurrentPair(prev => [...prev, id])
    } else {
      console.log('already flipped');
    }
    
  }

  return (
    <Grid.Column key={id} onClick={flipCard} className="card">
      <div
        id="back"
        className={flipped ? 'cardBack flipped' : 'cardBack'}
        style={{
          backgroundImage: `url(${image})`
        }}
      ></div>
      <div
        id="front"
        className={flipped ? 'cardFront flipped' : 'cardFront'}

      ></div>
    </Grid.Column>
  )
}

export default MemoryCard