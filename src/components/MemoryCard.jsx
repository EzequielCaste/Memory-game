import React, { useState } from 'react'

const MemoryCard = ({ character }) => {
  const { id, image } = character;

  const [flipped, setFlipped] = useState(false);

  function flipCard() {
    setFlipped(true)
    setTimeout(() => {
      setFlipped(false)
    }, 2000)
  }

  return (
    <div key={id} onClick={flipCard} className="card">
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
    </div>
  )
}

export default MemoryCard