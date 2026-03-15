import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3008",
  withCredentials: true,
});

export const getBlog = async () => {
  const res = await api.get("/blog/get");
  return res.data;
};

export const createBlog = async (data) => {
  const res = await api.post("/blog/post", data);
  return res.data;
};

export const editBlog = async (id, data) => {
  const res = await api.put(`/blog/update/${id}`, data);
  return res.data;
};

export const deleteBlog = async (id) => {
  const res = await api.delete(`/blog/delete/${id}`);
  return res.data;
};