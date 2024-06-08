const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const {
  getAllCourses,
  getCourseById,
  addCourse,
  updateCourse,
  softDeleteCourse,
} = require('../controllers/courseController');

const authMiddleware = require('../middlewares/authMiddleware');

router.get(
  '/getAllCourses',
  authMiddleware.authorize(['teacher', 'student']),
  getAllCourses
);

router.get(
  '/getCourseById/:id',
  authMiddleware.authorize(['teacher', 'student']),
  getCourseById
);

router.post(
  '/addCourse',
  upload.single('image'),
  authMiddleware.authorize(['teacher']),
  addCourse
);

router.patch(
  '/updateCourse/:id',
  authMiddleware.authorize(['teacher']),
  updateCourse
);

router.put(
  '/softDeleteCourse/:id',
  authMiddleware.authorize(['teacher']),
  softDeleteCourse
);

module.exports = router;
