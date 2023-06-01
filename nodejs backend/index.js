const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/helthz', (req, res) => {
  res.send('ok!');
});

app.get('/helthz1', (req, res) => {
  res.send('ok1!');
});

app.get('/helthz2', (req, res) => {
  res.send('ok2!');
});
