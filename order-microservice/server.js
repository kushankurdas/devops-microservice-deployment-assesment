const express = require('express');

// constants 
const port = 8000;
const microserviceName = 'OrderMicroService'
const basePath = '/api/order/';

const app = express();

app.get(basePath, (req, res) => {
    res.send(`${microserviceName} is up on running`)
})

app.listen(port, () => {
    console.log(`${microserviceName} started and listening to port : ${port}`);
})

