const express = require('express');
const router = express.Router();
const db = require('../models');
const { Card } = db;

router.route('/')
.get((req, res) => {
  Card.findAll()
  .then(cards => {
    res.send(cards);
  });
})
.post((req, res) => {
  Card.create({
    title: req.body.title,
    priority: req.body.priority,
    status: req.body.status
  })
  .then((card) => {
    console.log('POSTED');
    res.send('POSTED');
  });
});

router.route('/404', (req, res) => {
  res.status(404);
  res.render('404');
});

router.route('/:id')
.delete((req, res) => {
  Card.destroy(
  {
    where: {
      id: req.params.id
    }
  });
});

module.exports = router;