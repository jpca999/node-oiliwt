const twilio = require('twilio');

class Twilio{
    phoneNumber= '+19095528238'; 
    phoneNumberSid= 'AC81db6b6aae46652049527fa2a5f73824'; 
    tokenSid='SK3089b959a87b143da11071b9014c6541';
    tokenSecret='GWT6SiwPkq7DMEXznbCAX76sr1PyjzUN';
    accountSid='AC81db6b6aae46652049527fa2a5f73824'; 
    verify = 'VA24a4002c8bdd5a1108d482e7e7a0f408';
    client; 
    constructor(){
        this.client = twilio(this.tokenSid, this.tokenSecret,{
            accountSid: this.accountSid,
        });
    }
        getTwilio(){
            this.client;
        }
    async  sendVerifyAsync(to, channel){
           const data = await this.client.verify.services(this.verify).verifications.create({
                to,
                channel
            }); 
            console.log('sendVerify = ', data); 
            return data;
        }
     async  verifyCodeAsync(to, code){
            const data = await this.client.verify.services(this.verify).verificationChecks.create({
                 to,
                 code
             }); 
             console.log('verify Code = ', data); 
             return;
         }
}
const instance = new Twilio()

 Object.freeze(instance);

 module.exports = instance