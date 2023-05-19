import React, { useState, useEffect } from "react";
import GameCard from "./GameCard";

const MyGames = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch(
        'https://api.rawg.io/api/games?key=cb756380bfee4e919c3c398e5bd0da08&ordering=-rating&page_size=10'
      );
      if (response.ok) {
        const data = await response.json();
        setGames(data.results);
      } else {
        console.log('Error:', response.status);
      }
    };

    fetchGames();
  }, []);

  return (
    <div className="my-games">
      <h2 className="section-title">My Games Library</h2>
      <div className="game-list">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default MyGames;