const authService = require('../services/authService');

const register = async (req, res) => {
  try {
    const user = await authService.register(req.body);
    res.cookie('userData', {
      access_token: user.access_token,
      role: user.role,
    });
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const user = await authService.login(req.body);
    res.cookie('userData', {
      access_token: user.access_token,
      role: user.role,
    });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { register, login};
