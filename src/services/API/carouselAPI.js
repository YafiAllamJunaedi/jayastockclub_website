import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3008",
  withCredentials: true,
});

export const getCarousel = async () => {
  const res = await api.get("/carousel/get");
  return res.data;
};

export const createCarousel = async (data) => {
  const res = await api.post("/carousel/post", data);
  return res.data;
};

export const editCarousel = async (id, data) => {
  const res = await api.put(`/carousel/update/${id}`, data);
  return res.data;
};

export const deleteCarousel = async (id) => {
  const res = await api.delete(`/carousel/delete/${id}`);
  return res.data;
};