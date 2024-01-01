const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({
    response: 'Hello saya kardi',
  });
});

app.get('/will', (req, res) => {
  res.send({
    response: 'Kami membuat implementasi CI/CD yang membanggongkan',
  });
});

app.get('/ready', (req, res) => {
  res.send({
    response: 'Berhasill!!',
  });
});

app.listen(process.env.PORT || 3000);

module.exports = app;
