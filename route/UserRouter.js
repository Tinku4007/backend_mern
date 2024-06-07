import express from 'express'
import { UserRegistration } from '../Controller/UserContoller.js';

export const userRouter = express.Router();
userRouter.post('/signup', UserRegistration)