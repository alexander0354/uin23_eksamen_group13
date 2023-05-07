//For MyGames, hent 4 spill fra en valgri sjanger som vises i seksjonen My Games i dashboard, 
//og 20 spill fra samme sjanger på My Games-biblioteksiden (/mygames)
import React, { useState, useEffect } from "react";
import axios from "axios";
import GameCard from "./GameCard";

const MyGames = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const response = await axios.get(
        "https://api.rawg.io/api/games",
        {
          params: {
            page_size: 20,
            ordering: "-released",
          },
        }
      );
      setGames(response.data.results.slice(0, 4));
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