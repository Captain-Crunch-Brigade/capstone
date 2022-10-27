const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const atelierAPI = require('./api/atelier');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  atelierAPI.getProduct(id)
    .then((results) => {
      res.status(200).json(results);
    }).catch((err) => {
      if (err) {
        res.status(404).send('error');
      }
    });
});

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
  atelierAPI.postQuestion(req.body)
    .then((results) => {
      res.status(201).send(results.data);
    })
    .catch((err) => {
      console.log('error in server call: ', err);
      res.status(404).send('Not Found');
    });
});

app.put('/api/qa/questions/helpful', (req, res) => {
  atelierAPI.qHelpful(req.body.id)
    .then((results) => {
      res.status(204).send(results.statusCode);
    })
    .catch(() => {
      res.status(404).send('Not Found');
    });
});

app.put('/api/qa/questions/report', (req, res) => {
  atelierAPI.qReport(req.body.id)
    .then((results) => {
      res.status(204).send(results.data);
    })
    .catch(() => {
      res.status(404).send('Not Found');
    });
});

app.post('/api/qa/answers/:id', (req, res) => {
  const { id } = req.params;
  atelierAPI.postAnswer(req.body, id)
    .then((results) => {
      res.status(201).send(results.data);
    })
    .catch((err) => {
      console.log('error in server call: ', err);
      res.status(404).send('Not Found');
    });
});

app.put('/api/qa/answers/helpful', (req, res) => {
  atelierAPI.aHelpful(req.body.id)
    .then((results) => {
      res.status(204).send(results.statusCode);
    })
    .catch(() => {
      res.status(404).send('Not Found');
    });
});

app.put('/api/qa/answers/report', (req, res) => {
  atelierAPI.aReport(req.body.id)
    .then((results) => {
      res.status(204).send(results.data);
    })
    .catch(() => {
      res.status(404).send('Not Found');
    });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(3000);
console.log('Server listening at http://localhost:3000');
