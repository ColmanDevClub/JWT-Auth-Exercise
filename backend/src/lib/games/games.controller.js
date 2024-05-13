import { games } from './games.data.js';

export const getAll = (req, res) => {
  res.json(games);
};

export const getOne = (req, res) => {
  const { id } = req.params;
  const game = games.find((game) => game.id === +id);
  res.json(game);
};
