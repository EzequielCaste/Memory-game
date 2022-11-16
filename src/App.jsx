import React, {useState} from 'react';
import Images from './components/Images';
import shuffle from 'lodash/shuffle';
import Confetti from 'react-confetti';
import Footer from './components/Footer';
import ConfirmModal from './components/ConfirmModal';
import MemoryCard from './components/MemoryCard';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

const App = () => {
  const [cards, setCards] = useState(shuffle([...Images, ...Images]));
  const [clicks, setClicks] = useState(0);
  const [activeCards, setActiveCards] = useState([]);
  const [foundPairs, setFoundPairs] = useState([]);
  const [won, setWon] = useState(false);
  const [open, setOpen] = useState(false);

  function flipCard(index) {
    if (activeCards.length === 0) {
      setActiveCards([index]);
    }
    if (activeCards.length === 1) {
      const firstIndex = activeCards[0];
      const secondIndex = index;

      if (cards[firstIndex] === cards[secondIndex]) {
        if (foundPairs.length + 2 === cards.length) {
          setWon(true);
          setTimeout(() => setOpen(true), 2000);
          setClicks(0);
        }

        setFoundPairs([...foundPairs, firstIndex, index]);
      }

      setActiveCards([...activeCards, index]);
    }
    if (activeCards.length === 2) {
      setActiveCards([index]);
    }

    setClicks(clicks + 1);
  }

  function restart() {
    setWon(false);
    setOpen(false);
    setClicks(0);
    setActiveCards([]);
    setFoundPairs([]);
    setCards(shuffle([...Images, ...Images]));
  }

  return (
    <>
      <div className="board">
        {cards.map((card, index) => {
          const flippedToFront =
            activeCards.indexOf(index) !== -1 ||
            foundPairs.indexOf(index) !== -1;

          return <MemoryCard 
            key={index} 
            flippedToFront={flippedToFront} 
            card={card} 
            index={index} 
            flipCard={flipCard}
          />;
        })}
        <Footer
          restart={restart}
          clicks={clicks}
          won={won}
          pairs={foundPairs.length / 2}
        />
      </div>
      <ConfirmModal 
        open={open} 
        setOpen={setOpen} 
        restart={restart}
      />
      {won && (
        <Confetti 
          width={window.innerWidth} 
          height={window.innerHeight}
        />
      )}
    </>
  );
};

export default App;
