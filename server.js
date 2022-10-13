const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'client/dist')));

const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp';

app.get('/api/products', async (req, res) => {
  // req.headers.Authorization = process.env.API_KEY;
  const results = await axios.get(`${baseURL}/products`, {
    headers: {
      Authorization: process.env.API_KEY,
    },
  });

  res.json(results.data);
});

app.listen(3000);
console.log('Server listening at http://localhost:3000');
