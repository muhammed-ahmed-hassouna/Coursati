const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SystemRoles } = require('../utils/enums');

const registerUser = async ({ name, email, password, role }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password: hashedPassword, role });
  await user.save();
  return user;
};

const registerTeacher = async ({ name, email, password, role }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const teacher = new User({ name, email, password: hashedPassword, role : SystemRoles.Teacher });
  await teacher.save();
  return teacher;
};

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email }).lean();
  if (!user) throw new Error('User not found');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');

  const payload = {
    id: user._id,
    role: user.role,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

  return { user, token };
};

const loginTeacher = async ({ email, password }) => {
  const teacher = await User.findOne({ email }).lean();
  if (!teacher) throw new Error('Teacher not found');

  const isMatch = await bcrypt.compare(password, teacher.password);
  if (!isMatch) throw new Error('Invalid credentials');

  const payload = {
    id: teacher._id,
    role: teacher.role,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

  return { teacher, token };
};

module.exports = { registerUser, loginUser, registerTeacher, loginTeacher };
