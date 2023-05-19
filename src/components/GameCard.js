import React from 'react';

const GameCard = ({ game, addToFavourites, cardStyle }) => {
  const { title, genre, image } = game;

  return (
    <div className={`game-card ${cardStyle}`}>
      <div className="game-card-image">
        <img src={game.background_image} alt={game.name} />
      </div>
      <div className="text-content">
        <h3><a href={`/${game.id}`}>{title}</a></h3>
        <p>{genre}</p>
        <button className="add-to-favourites" onClick={() => addToFavourites(game)}>
          Add to favourites!
        </button>
      </div>
    </div>
  );
};

export default GameCard;