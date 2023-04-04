const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
      unique: true,
      trim: false,
      minlength: 3,
    },
  },
  {
    timestamps: true,
  },
);

const Idea = mongoose.model('Idea', userSchema);

module.exports = Idea;
