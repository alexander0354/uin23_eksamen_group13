import { useParams } from 'react-router-dom';
import '../sass/_game-page.scss';

const GamePage = ({ games }) => {
  const { slug } = useParams();
  const game = games.find(game => game.slug === slug);

  if (!game) return <div>Gameinfo was not found!</div>;

  return (
    <div className="game-page">
      <img src={game.background_image} alt={game.name} />
      <h2>{game.name}</h2>
      <p>{game.description}</p>
      <div className="game-details">
        <p className="game-detail">Genre: {game.genres.map(genre => genre.name).join(', ')}</p>
        <p className="game-detail">Release date: {game.released}</p>
        <p className="game-detail">Publisher: {game.publishers.map(publisher => publisher.name).join(', ')}</p>
        <p className="game-detail">Platforms: {game.platforms.map(platform => platform.platform.name).join(', ')}</p>
      </div>
      <button className="purchase-button">Buy now!</button>
    </div>
  );
};

export default GamePage;