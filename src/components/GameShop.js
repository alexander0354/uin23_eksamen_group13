import React, { useState, useEffect } from 'react';


const GameShop = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch('https://api.rawg.io/api/games?key=cb756380bfee4e919c3c398e5bd0da08', {
        params: {
          ordering: '-rating',
          page_size: 10,
        },
        headers: {
          'User-Agent': 'GameHub/1.0',
          'Authorization': 'Bearer cb756380bfee4e919c3c398e5bd0da08',
        },
      });
      const data = await response.json();
      setGames(data.results);
    };
    fetchGames();
  }, []);

  return (
    
    <section className="gameShop">
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
   </section>
  );
};

export default GameShop;