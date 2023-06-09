import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import DashBoard from './components/DashBoard';
import GameShop from './components/GameShop';
import MyGames from './components/MyGames';
/*import MyFavorites from './components/MyFavorites'; */
import './sass/styles.scss';
import GamePage from './components/GamePage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <a href="/" className="App-header-logo">
            GameHub
          </a>
          <nav>
            <ul>
              <li>
                <a href="/gameshop">Gameshop</a>
              </li>
              <li>
                <a href="/mygames">My Games</a>
              </li>
              <li>
                <a href="/favourites">My Favourites</a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="App-content">
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/gameshop" element={<GameShop />} />
            <Route path="/mygames" element={<MyGames />} />
            {/*<Route path="/favourites" element={<MyFavorites />} />*/}
            <Route path="/game/:slug" element={<GamePage />} />
          </Routes>
        </div>
        {/*<aside className="my-favourites">
        <h2>My Favourites</h2>
        <p>Coming soon...</p>
        </aside>*/}
        <Footer />
      </div>
    </Router>
  );
}































export default App;