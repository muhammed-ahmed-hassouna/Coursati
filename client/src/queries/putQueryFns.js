import api from "../configs/api";

export async function softDeleteCourse(id) {
  const { data } = await api.put(`/softDeleteCourse/${id}`);
  return data;
}
