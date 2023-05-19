//For MyFavourites, lag funksjonalitet som gjør følgende:
//* På visning av ett spill (, ha en knapp "Legg til favoritter".
//* Klikk på knappen "Legg til favoritter" skal lagre spillet i en array i en state kalt favourites.
//* MyFavourites skal hente/vise spill fra favourites-staten.
import React from 'react';
import GameCard from './GameCard';

const MyFavorites = ({ favourites }) => {
  return (
    <div className="myfavourites">
      {favourites.map((game, index) => (
        <GameCard key={index} game={game} cardStyle="myfavourites-card" />
      ))}
    </div>
  );
};

export default MyFavorites; 