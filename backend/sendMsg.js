const express = require ('express'); 
const twilio = require('./Twilio');
const app = express(); 

const PORT = 4000;


// console.log('process.env.tokenSid =', process.env.test); 

const TMSG = require('twilio')(
    'SK3089b959a87b143da11071b9014c6541', 
    'GWT6SiwPkq7DMEXznbCAX76sr1PyjzUN',
    {
        accountSid: 'AC81db6b6aae46652049527fa2a5f73824'
    }
);


app.get('/sendmsg', async (req, res) =>{
    console.log('sendmsg');
  
    TMSG.messages.create({
        from: '+19095528238',
        to: '+17146067884',
        body:"Hello from twilio"
    })
    .then(message =>{
        console.log(` message sent  with sid ${message.sid}` );
    })
    .catch(error=>{
        console.error(error);
    })

}); 




console.log(' process.env=', process.env.MOBILE); 

app.listen(PORT, () =>{
    console.log(' port listneing.on 4000 ')
}); 


