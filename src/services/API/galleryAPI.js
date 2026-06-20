import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.LINK_BE,
  withCredentials: true,
});

export const getGallery = async () => {
  const res = await api.get("/gallery/get");
  return res.data;
};

export const createGallery = async (data) => {
  const res = await api.post("/gallery/post", data);
  return res.data;
};

export const editGallery = async (id, data) => {
  const res = await api.put(`/gallery/update/${id}`, data);
  return res.data;
};

export const deleteGallery = async (id) => {
  const res = await api.delete(`/gallery/delete/${id}`);
  return res.data;
};