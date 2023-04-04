const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
      unique: true,
      trim: false,
      minlength: 1,
    },
    department: {
      type: String,
      required: true,
      unique: true,
      trim: false,
      minlength: 1,
    },
    attachment: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

const Idea = mongoose.model('Idea', userSchema);

module.exports = Idea;
