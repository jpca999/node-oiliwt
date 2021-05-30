const express = require ('express'); 
const app = express(); 
const PORT = 4000;

app.get('/test', (req, res) =>{
    res.send('welcome to express')
}); 

app.get('/login', (req, res) =>{
    res.send('logging in')
}); 

app.get('/verify', (req, res) =>{
    res.send('verifying')
}); 


console.log(' process.env=', process.env.MOBILE); 

app.listen(PORT, () =>{
    console.log(' port listneing.on 4000 ')
}); 


