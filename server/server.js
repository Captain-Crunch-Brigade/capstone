const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const atelierAPI = require('./api/atelier');

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'client/dist')));

app.get('/api/related_items/:id/info', async (req, res) => {
  const { id } = req.params;

  Promise.all([
    atelierAPI.getProduct(id),
    atelierAPI.getRelatedProducts(id),
    atelierAPI.getStarsById(id),
    atelierAPI.getThumbnailImages(id),
  ]).then((results) => {
    res.status(200).json(results);
  }).catch((err) => {
    if (err) {
      res.status(404).send('Not Found');
    }
  });
});

app.get('/api/related_items/:id', async (req, res) => {
  const { id } = req.params;

  atelierAPI.getRelatedProducts(id)
    .then((results) => {
      res.status(200).json(results);
    }).catch((err) => {
      if (err) {
        res.status(404).send('Not Found');
      }
    });
});

app.get('/api/styles/:id', async (req, res) => {
  const { id } = req.params;

  Promise.all([
    atelierAPI.getProduct(id),
    atelierAPI.getStarsById(id),
    atelierAPI.getThumbnailImages(id),
  ]).then((results) => {
    res.status(200).json(results);
  }).catch((err) => {
    if (err) {
      res.status(404).send('Not Found');
    }
  });
});
app.get('/api/qa/questions/:id', async (req, res) => {
  const { id } = req.params;
  atelierAPI.getQuestions(id)
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      if (err) {
        res.status(404).send('Not Found');
      }
    });
});
app.post('/api/qa/questions', (req, res) => {
  console.log('post request', req.body);
  atelierAPI.postQuestion(req.body)
    .then((results) => {
      console.log('results from post call: ', results.data);
      res.status(201).send(results.data);
    })
    .catch((err) => {
      console.log('error in server call: ', err);
      res.status(404).send('Not Found');
    })
});

app.listen(3000);
console.log('Server listening at http://localhost:3000');
