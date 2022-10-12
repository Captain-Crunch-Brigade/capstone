const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'client/dist')));

app.listen(3000);
console.log('Server listening at http://localhost:3000');
