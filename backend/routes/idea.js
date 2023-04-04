const router = require('express').Router();
let Idea = require('../models/idea.model');

router.route('/').get((req, res) => {
  Idea.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const description = req.body.description;

  const newIdea = new Idea({description});

  newIdea
    .save()
    .then(() => res.json('Idea added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
