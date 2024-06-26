import express from 'express';
import * as authController from './auth.controller.js';

const authRouter = express.Router();

authRouter.post('/login', authController.login);
authRouter.post('/signup', authController.register);

export default authRouter;
