const express = require('express');
const router = express.Router();
const db = require('../models');
const { Card } = db;

router.route('/')
  .get((req, res) => {
    Card.findAll()
      .then(cards => {
        res.send(cards);
      })
      .catch((err) => {
        res.send(err);
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
      })
      .catch(err => {
        res.send(err);
      });
  });

router.route('/404', (req, res) => {
  res.status(404);
  res.render('404');
});

router.route('/:id')
  .get((req, res) => {
    Card.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(card => {
      return card.get({
        plain: true
      });
    });
  })
  .delete((req, res) => {
    Card.findOne({
      where: {
        id: req.params.id
      }
    })
    .then((card) => {
    console.log(req.params.id);
      card.destroy();
      Card.findAll().then((card) => {
        res.redirect('');
      });
    });
  })
  .put((req, res) => {
    Card.update({
      title: req.body.title,
      priority: req.body.priority,
      status: req.body.status
    },
      {where: {
        id: req.params.id
      }
    })
    .catch(err => {
      res.send(err);
    });
  });

module.exports = router;