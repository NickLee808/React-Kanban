const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pg = require('pg');
const PORT = process.env.PORT || 9000;
const cardRoute = require('./routes/card');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/cards/', cardRoute);

/*app.use('/', (req, res) => {
  res.send('aloha ao');
});*/

app.listen(PORT, _ => console.log('Server listening on PORT', PORT));

module.exports = app;