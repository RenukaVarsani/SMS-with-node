require('dotenv').config()
const express = require('express');
const { Client } = require('twilio/lib/base/BaseTwilio');
const app = express();
const port = 8000;

accountSid = process.env.ACCOUNT_SID
authToken = process.env.AUTH_TOKEN
const client = require('twilio')(accountSid, authToken);

app.get('/' , (req,res)=>{
    sendText();
    res.send(`
    <div style = "text-align:center; padding-top:40px;">
    <h1>Your message has been successfully sent<h1>
    <p>this is hello world app</p>  
    
    `)
})

client.messages.create({
    from: process.env.TWILIO_PHONE_NUMBER,
    to: process.env.CELL_PHONE_NUMBER,
    body: "Send SMS using Twilio Api in Node.js!"
  }).then((res) => console.log("message has been sent",res))
  .catch((err)=> console.log(err)) 

app.listen(port , ()=>console.log("app is running on port 8000"))
