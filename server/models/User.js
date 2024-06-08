const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'student',
    enum: ['student', 'teacher'],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
