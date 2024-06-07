const express = require('express');
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json());


app.get('/',(req,res)=>{
    res.send("hello");
})

app.post('/signup', async (req, res) => {
    try {
        const responce = await req.body
        console.log(responce)
        res.status(200).json({ message: 'Signup successful', data: responce });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal server error' });
    }
})
app.get('/check',(req,res)=>{
    res.send("check");
})

app.listen(8000);

console.log('8000 working');