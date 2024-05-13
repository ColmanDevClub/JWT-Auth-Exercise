import express from 'express';
import usersRouter from './src/lib/users/users.routes.js';
import gamesRouter from './src/lib/games/games.routes.js';
import authRouter from './src/lib/auth/auth.routes.js';

const router = express();

router.use('/users', usersRouter);
router.use('/games', gamesRouter);
router.use('/auth', authRouter);

export default router;
