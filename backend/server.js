const express = require ('express'); 
const app = express(); 
const PORT = 4000;

app.get('/test', (req, res) =>{
    res.send('welcome to express')
}); 

app.listen(PORT, () =>{
    console.log(' port listneing.on 4000 ')
}); 