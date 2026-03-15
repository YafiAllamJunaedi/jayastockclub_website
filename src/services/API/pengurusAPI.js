import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3008",
  withCredentials: true,
});

export const getPengurus = async () => {
  const res = await api.get("/pengurus/get");
  return res.data;
};

export const createPengurus = async (data) => {
  const res = await api.post("/pengurus/post", data);
  return res.data;
};

export const editPengurus = async (id, data) => {
  const res = await api.put(`/pengurus/update/${id}`, data);
  return res.data;
};

export const deletePengurus = async (id) => {
  const res = await api.delete(`/pengurus/delete/${id}`);
  return res.data;
};