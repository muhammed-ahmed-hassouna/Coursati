const courseService = require('../services/courseService');

const getAllCourses = async (req, res) => {
  try {
    const courses = await courseService.getAllCourses();
    res.status(201).json({ courses });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCourseById = async (req, res) => {
  const courseId = req.params.id;
  try {
    const course = await courseService.getCourseById(courseId);
    res.status(200).json({ course });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const addCourse = async (req, res) => {
  const teacherID = req.user.id;
  const file = req.file; 
  try {
    const course = await courseService.addCourse({
      ...req.body,
      teacherID,
      file,
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
    res.status(200).json({ message: 'Course soft deleted', course });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  getAllCourses,
  getCourseById,
  addCourse,
  updateCourse,
  softDeleteCourse,
};
