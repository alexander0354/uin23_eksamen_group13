import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import DashBoard from './components/DashBoard';
import GameShop from './components/GameShop';
import MyGames from './components/MyGames';
import MyFavorites from './components/MyFavorites';
import './sass/styles.scss';
import GamePage from './components/GamePage';
import Footer from './components/Footer';

function App() {
  const [favourites, setFavourites] = useState([]);
  const [games, setGames] = useState([]);

  const addToFavourites = (game) => {
    setFavourites(prevFavourites => [...prevFavourites, game]);
  }

  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch('https://api.rawg.io/api/games?key=cb756380bfee4e919c3c398e5bd0da08');
      const data = await response.json();
      setGames(data.results);
    };

    fetchGames();
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/" className="App-header-logo">
            GameHub
          </Link>
          <nav>
            <ul>
              <li>
                <Link to="/mygames">My Games</Link>
              </li>
              <li>
                <Link to="/gameshop">Gameshop</Link>
              </li>
              <li>
                <Link to="/favourites">My Favourites</Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className="App-content">
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/gameshop" element={<GameShop />} />
            <Route path="/mygames" element={<MyGames games={games} addToFavourites={addToFavourites} />} />
            <Route path="/favourites" element={<MyFavorites favourites={favourites} />} />
            <Route path="/game/:slug" element={<GamePage games={games} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;