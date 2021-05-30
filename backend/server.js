const express = require ('express'); 
const twilio = require('./Twilio');
const app = express(); 

const PORT = 4000;

app.get('/test', (req, res) =>{
    res.send('welcome to express')
}); 

app.get('/login', async (req, res) =>{
    console.log('logging in');
    const data = await twilio.sendVerifyAsync(process.env.MOBILE, 'sms')
    res.send(data)

}); 

app.get('/verify', (req, res) =>{
    res.send('verifying')
}); 


console.log(' process.env=', process.env.MOBILE); 

app.listen(PORT, () =>{
    console.log(' port listneing.on 4000 ')
}); 


