import React from 'react';

const GameCard = ({ game }) => {
  return (
    <div className="game-card-text"> 
      <div className="game-card-image">
        <img src={game.background_image} alt={game.name} />
      </div>
      <div className="game-card-details">
        <h3>{game.name}</h3>
        <p>{game.publisher}</p>
        <button>Kjøp</button>
      </div>
    </div>
  );
};

export default GameCard;
//game-card-text
//game-card-image
//game-card-details