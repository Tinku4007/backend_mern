import express from 'express'
import cors from 'cors'
import { userRouter } from './route/UserRouter.js';
import connectDB from './db/config.js';

const app = express()


app.use(cors())
app.use(express.json());

connectDB()
app.get('/', (req, res) => {
    res.send("hello");
})

app.use('/user', userRouter)

app.listen(8000);

console.log('8000 working');