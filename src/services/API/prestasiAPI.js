import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

export const getPrestasi = async () => {
  const res = await api.get("/prestasi/get");
  return res.data;
};

export const createPrestasi = async (data) => {
  const res = await api.post("/prestasi/post", data);
  return res.data;
};

export const editPrestasi = async (id, data) => {
  const res = await api.put(`/prestasi/update/${id}`, data);
  return res.data;
};

export const deletePrestasi = async (id) => {
  const res = await api.delete(`/prestasi/delete/${id}`);
  return res.data;
};