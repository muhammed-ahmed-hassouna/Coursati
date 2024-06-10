import api from "../configs/api";

export async function getCourseByTeacherId(id) {
  const { data } = await api.get(`/getCourseByTeacherId/${id}`);
  return data;
}
