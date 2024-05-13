import React, { useEffect, useState } from 'react';

const GamesList = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //TODO: Fetch games from the server
  useEffect(() => {}, []);

  return (
    <section style={{ gridArea: 'games' }}>
      <h1>Games List</h1>
      {isLoading && <p className="toast">Loading...</p>}
      {error && (
        <p className="toast">
          Error {error.status}: {error.statusText}
        </p>
      )}
      <ul>
        {games?.map((game) => (
          <li key={game.id}>
            <h2>{game.name}</h2>
            <p>{game.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default GamesList;
