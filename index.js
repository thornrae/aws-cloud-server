'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let data = {};

app.get('/', (req, res) => {
  res.status(200).send('new shit');
})

app.post('/data', (req, res) => {
  data = req.body;
  res.status(201).send('okiedokie');
})

app.listen(PORT, () => console.log(`up on port: ${PORT}`));

