const courseService = require('../services/courseService');
const Firebase = require('../config/FirebaseConfig/FireBaseConfig');

const getAllCourses = async (req, res) => {
  try {
    const courses = await courseService.getAllCourses();
    res.status(201).json({ courses });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCourseByTeacherId = async (req, res) => {
  const teacherID = req.params.id;
  try {
    const course = await courseService.getCourseByTeacherId(teacherID);
    res.status(200).json({ course });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const addCourse = async (req, res) => {
  const teacherID = req.user.id;
  try {
    const course = await courseService.addCourse({
      ...req.body,
      teacherID,
    });
    res.status(201).json({ course });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateCourse = async (req, res) => {
  const courseId = req.params.id;
  const updateData = req.body;
  try {
    const course = await courseService.updateCourse(courseId, updateData);
    res.status(200).json({ course });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const softDeleteCourse = async (req, res) => {
  const courseId = req.params.id;
  try {
    const course = await courseService.softDeleteCourse(courseId);
    res.status(200).json({ message: 'Course soft deleted'});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const uploadFile = async (req, res, next) => {
  try {
    
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const fileName = `${Date.now()}_${req.file.originalname}`;
    const fileUrl = await Firebase.uploadFileToFirebase(req.file, fileName);

    return res.status(200).json(fileUrl);
  } catch (error) {
    return res.status(500).json({ message: 'Failed to upload file', error: error.message });
  }
};

module.exports = {
  getAllCourses,
  getCourseByTeacherId,
  addCourse,
  updateCourse,
  softDeleteCourse,
  uploadFile
};
