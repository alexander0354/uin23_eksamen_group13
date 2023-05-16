import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GameShop = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const response = await axios.get('https://api.rawg.io/api/games?key=cb756380bfee4e919c3c398e5bd0da08', {
        params: {
          ordering: '-rating',
          page_size: 10,
        },
        headers: {
          'User-Agent': 'GameHub/1.0',
          'Authorization': 'Bearer cb756380bfee4e919c3c398e5bd0da08',
        },
      });
      setGames(response.data.results);
    }
    fetchGames();
  }, []);

  return (
    <div>
      {games.map(game => (
        <div className="game-card" key={game.id}>
          <img src={game.background_image} alt={game.name} />
          <div className="text-content">
            <h3>{game.name}</h3>
            <p>{game.released}</p>
            <button>Buy</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameShop;