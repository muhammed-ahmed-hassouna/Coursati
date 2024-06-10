import api from "../configs/api";

// Sign Up
export async function signUpUser(formData) {
  const { data } = await api.post(`/register`, formData);
  return data;
}

// Log in
export async function login(formData) {
  const { data } = await api.post(`/login`, formData);
  return data;
}

// Add Course
export async function uploadCourse({ formData }) {
  const { data } = await api.post(`/addCourse`, formData);
  return data;
}
