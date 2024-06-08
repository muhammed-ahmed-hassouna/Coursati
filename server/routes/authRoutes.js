const express = require('express');
const {
  registerUser,
  loginUser,
  registerTeacher,
  loginTeacher,
} = require('../controllers/authController');

const router = express.Router();

router.post('/registerUser', registerUser);

router.post('/loginUser', loginUser);

router.post('/registerTeacher', registerTeacher);

router.post('/loginTeacher', loginTeacher);

module.exports = router;
