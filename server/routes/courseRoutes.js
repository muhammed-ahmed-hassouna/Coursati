const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const {
  getAllCourses,
  getCourseByTeacherId,
  addCourse,
  updateCourse,
  softDeleteCourse,
  uploadFile,
} = require('../controllers/courseController');

const authMiddleware = require('../middlewares/authMiddleware');

router.get(
  '/getAllCourses',
  authMiddleware.authorize(['teacher', 'student']),
  getAllCourses
);

router.get(
  '/getCourseByTeacherId/:id',
  authMiddleware.authorize(['teacher', 'student']),
  getCourseByTeacherId
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

router.post(
  '/upload',
  upload.single('file'),
  authMiddleware.authorize(['teacher']),
  uploadFile
);

module.exports = router;
