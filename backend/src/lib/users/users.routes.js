import express from 'express';
import * as usersController from './users.controller.js';

const usersRouter = express.Router();

usersRouter.get('/', usersController.getAll);

usersRouter.delete('/:id', usersController.remove);

export default usersRouter;
