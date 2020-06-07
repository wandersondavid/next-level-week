import express from 'express';

const app = express();

app.get('/test', (req, res)=> {
    console.log("olá, mundo");
    res.json({"Hello Word!":"Olá, mundo!"})
})

app.listen(9999)