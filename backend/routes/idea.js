const router = require('express').Router();
const middleware = require('../middleware/multer_middleware');
let Idea = require('../models/idea.model');

router.route('/').get((req, res) => {
  Idea.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post(middleware.single('photo'), (req, res) => {
  const description = req.body.description;
  const department = req.body.department;
  const attachment = req.body.attachment;

  const newIdea = new Idea({description, department, attachment});

  newIdea
    .save({attachment})
    .then(() => res.json('Idea added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
