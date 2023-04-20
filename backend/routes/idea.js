const router = require('express').Router();
const middleware = require('../middleware/multer_middleware');
let Idea = require('../models/idea.model');

router.route('/').get((req, res) => {
  Idea.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post(middleware.single('photo'), (req, res) => {
  const Department = req.body.Department;
  const Description = req.body.Description;
  const Name = req.body.Name;
  const Attachment = req.body.Attachment;
  const Status = req.body.Status;
  const Priority = req.body.Priority;
  const Assigned_to = req.body.Assigned_to;
  const Notes = req.body.Notes;

  const newIdea = new Idea({
    Department,
    Description,
    Name,
    Attachment,
    Status,
    Priority,
    Assigned_to,
    Notes,
  });

  newIdea
    .save({Attachment})
    .then(() => res.json('Idea added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
