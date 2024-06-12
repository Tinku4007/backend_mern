import express from 'express'
import cors from 'cors'
import { userRouter } from './route/UserRouter.js';
import connectDB from './db/config.js';
import { productRouter } from './route/ProductRouter.js';

const app = express()


app.use(cors())
app.use(express.json());

connectDB();
app.use(express.static("Public"));

app.get('/', (req, res) => {
    res.send("hello");
})

app.use('/user', userRouter)
app.use('/', productRouter)



console.log('8000 working');
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});