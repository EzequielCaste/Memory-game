const MemoryCard = ({ index, card, flippedToFront, flipCard }) => {
  return (
    <div
      key={index}
      onClick={() => flipCard(index)}
      className={'card-outer ' + (flippedToFront ? 'flipped' : '')}
    >
      <div className="card">
        <div className="front">
          <img src={card} />
        </div>
        <div className="back" />
      </div>
    </div>
  )
}

export default MemoryCard