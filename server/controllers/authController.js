const authService = require('../services/authService');

const registerUser = async (req, res) => {
  try {
    const user = await authService.registerUser(req.body);
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const registerTeacher = async (req, res) => {
  try {
    const teacher = await authService.registerTeacher(req.body);
    res.status(201).json({ message: 'Teacher registered successfully', teacher });
  } catch {
    res.status(400).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { user, token } = await authService.loginUser(req.body);
    res.json({ token, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginTeacher = async (req, res) => {
  try {
    const { teacher, token } = await authService.loginTeacher(req.body);
    res.json({ token, teacher });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { registerUser, loginUser, registerTeacher, loginTeacher };
