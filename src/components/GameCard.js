import React from 'react';

const GameCard = ({ game }) => {
  return (
    <div className="gameShop"> 
      <div className="game-card">
        <img src={game.background_image} alt={game.name} />
      </div>
      <div className="text-content">
        <h3>{game.name}</h3>
        <p>{game.publisher}</p>
        <button>Kjøp</button>
      </div>
    </div>
  );
};

export default GameCard;
//game-card
//game-card-image
//game-card-details