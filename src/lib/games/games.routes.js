import express from 'express';
import * as gamesController from './games.controller.js';

const gamesRouter = express.Router();

gamesRouter.get('/', gamesController.getAll);
gamesRouter.get('/:id', gamesController.getOne);

export default gamesRouter;
