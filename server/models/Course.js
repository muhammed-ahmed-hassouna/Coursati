const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  course_name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String, 
    default: '',
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
