import { users } from './users.data.js';

export const getAll = (req, res) => {
  res.json(users);
};

//TODO: Implement the remove controller function
export const remove = (req, res) => {};
