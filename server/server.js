const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pg = require('pg');
const PORT = process.env.PORT || 9000;
const cardRoute = require('./routes/card');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/cards/', cardRoute);

// Fixes 'Access-Control-Allow-Origin' error
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});

app.use('/', (req, res) => {
  res.redirect('/api/cards/');
});

app.listen(PORT, _ => console.log('Server listening on PORT', PORT));

module.exports = app;