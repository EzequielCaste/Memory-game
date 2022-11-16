import React, { useState } from 'react'
import Images from './components/Images'
import shuffle from 'lodash/shuffle'
import Confetti from 'react-confetti'
import { Button, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import Footer from './components/Footer'

const App = () => {
  const [cards, setCards] = useState(shuffle([...Images, ...Images]));
  const [clicks, setClicks] = useState(0)
  const [activeCards, setActiveCards] = useState([])
  const [foundPairs, setFoundPairs] = useState([])
  const [won, setWon] = useState(false);
  const [open, setOpen] = useState(false)


  function flipCard(index) {
    if (activeCards.length === 0) {
      setActiveCards([index])
    }
    if (activeCards.length === 1) {
      const firstIndex = activeCards[0];
      const secondIndex = index;

      if (cards[firstIndex] === cards[secondIndex]) {
        if (foundPairs.length + 2 === cards.length) {
          setWon(true);
          setTimeout(() => setOpen(true), 2000)
          setClicks(0);
        }

        setFoundPairs([...foundPairs, firstIndex, index])
      }

      setActiveCards([...activeCards, index])
    }
    if (activeCards.length === 2) {
      setActiveCards([index])
    }

    setClicks(clicks + 1)
  }

  function restart() {
    setWon(false);
    setOpen(false)
    setClicks(0);
    setActiveCards([])
    setFoundPairs([])
    setCards(shuffle([...Images, ...Images]))
  }


  return (
    <div>
      <Modal
        dimmer='blurring'
        size='mini'
        open={open}
        onClose={() => setOpen(false)}
      >
        <Modal.Header>Well done!!</Modal.Header>
        <Modal.Content>
          <p>Thanks for playing! Restart a new game?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => setOpen(false)}>
            No
          </Button>
          <Button positive onClick={() => restart()}>
            Yes
          </Button>
        </Modal.Actions>
      </Modal>
      {
        won && <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
        />
      }
      <div className="board">
        {
          cards.map((card, index) => {
            const flippedToFront = (activeCards.indexOf(index) !== -1) || foundPairs.indexOf(index) !== -1;

            return (
              <div key={index} onClick={() => flipCard(index)} className={"card-outer " + (flippedToFront ? 'flipped' : '')}>
                <div className="card">
                  <div className="front">
                    <img src={card} />
                  </div>
                  <div className="back" />
                </div>
              </div>
            )
          })
        }
        <Footer 
          restart={restart} 
          clicks={clicks} 
          won={won} 
          pairs={foundPairs.length / 2} 
        />
      </div>
      
    </div>
  )
}

export default App