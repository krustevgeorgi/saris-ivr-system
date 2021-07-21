const express = require('express');
const VoiceResponse = require('twilio').twiml.VoiceResponse;

const app = express();
const PORT = 1337;

app.post('/voice', (req, res) => {
    const twiml = new VoiceResponse();
    twiml.say('Welcome to the land of bitches and cocaine.');

    res.type('text/xml');
    res.send(twiml.toString());
})

app.listen(PORT, () => {
    console.log(`YASHAAAAAAAAA ${PORT}`)
});