import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

export const getEvent = async () => {
  const res = await api.get("/event/get");
  return res.data;
};

export const createEvent = async (data) => {
  const res = await api.post("/event/post", data);
  return res.data;
};

export const editEvent = async (id, data) => {
  const res = await api.put(`/event/update/${id}`, data);
  return res.data;
};

export const deleteEvent = async (id) => {
  const res = await api.delete(`/event/delete/${id}`);
  return res.data;
};