const express = require('express');

// constants 
const port = 9000;
const microserviceName = 'PaymentMicroService'
const basePath = '/api/payment/';

const app = express();

app.get(basePath, (req, res) => {
    res.send(`${microserviceName} is up on running`)
})

app.listen(port, () => {
    console.log(`${microserviceName} started and listening to port : ${port}`);
})

