import api from "../configs/api";

export async function getCourseById(id) {
  const { data } = await api.get(`/getCourseById/${id}`);
  return data;
}
