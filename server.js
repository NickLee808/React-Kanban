const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pg = require('pg');
const PORT = process.env.PORT || 8080;

app.use('/', (req, res) => {
  res.send('aloha');
});

app.listen(PORT, _ => console.log('Server listening on PORT', PORT));

module.exports = app;