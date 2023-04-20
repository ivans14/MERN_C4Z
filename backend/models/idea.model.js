const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    Department: {
      type: String,
      required: true,
      unique: false,
      trim: false,
      minlength: 1,
    },
    Description: {
      type: String,
      required: true,
      unique: true,
      trim: false,
      minlength: 1,
    },
    Name: {
      type: String,
      required: true,
      unique: false,
    },
    Attachment: {
      type: String,
      required: false,
    },
    Status: {
      type: String,
      default: 'new',
      required: false,
    },
    Priority: {
      type: String,
      default: 'None',
      required: false,
    },
    Assigned_to: {
      type: String,
      default: 'None',
      required: false,
    },
    Notes: {
      type: String,
      default: 'None',
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

const Idea = mongoose.model('Idea', userSchema);

module.exports = Idea;
