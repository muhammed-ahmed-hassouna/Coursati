const Course = require('../models/Course');
const Firebase = require('../config/FirebaseConfig/FireBaseConfig');

const getAllCourses = async () => {
  const courses = await Course.find({ deleted: false });
  if (!courses) throw new Error('Courses not found');
  return courses;
};

const getCourseByTeacherId = async (teacherID) => {
  const course = await Course.find({ teacher: teacherID, deleted: false });
  if (!course) {
    throw new Error('Course For this Teacher not found');
  }
  return course;
};

const addCourse = async ({
  course_name,
  description,
  startDate,
  endDate,
  teacherID,
  image,
  video,
}) => {
  try {
    const course = new Course({
      course_name,
      description,
      startDate,
      endDate,
      teacher: teacherID,
      image,
      video,
    });

    await course.save();
    return course;
  } catch (error) {
    throw new Error('Error adding course: ' + error.message);
  }
};

const updateCourse = async (courseId, updateData) => {
  const course = await Course.findByIdAndUpdate(courseId, updateData, {
    new: true,
  });
  if (!course) {
    throw new Error('Course not found');
  }
  return course;
};

const softDeleteCourse = async (courseId) => {
  const course = await Course.findByIdAndUpdate(
    courseId,
    { deleted: true },
    { new: true }
  );
  if (!course) {
    throw new Error('Course not found');
  }
  return course;
};

module.exports = {
  getAllCourses,
  getCourseByTeacherId,
  addCourse,
  updateCourse,
  softDeleteCourse,
};
