import express from 'express'
import { LoginUser, UserRegistration } from '../Controller/UserContoller.js';

export const userRouter = express.Router();
userRouter.post('/signup', UserRegistration)
userRouter.post('/login', LoginUser)