import axios from "axios";
const API = import.meta.env.VITE_LINK_BE
const apiPublic = axios.create({
  baseURL: `${API}/consume/get`
});

export const getBlog = async () => {
  const res = await apiPublic.get("/blog");
  return res.data;
};

export const getPrestasi = async () => {
  const res = await apiPublic.get("/prestasi");
  return res.data;
};

export const getPengurus = async () => {
  const res = await apiPublic.get("/pengurus");
  return res.data;
};

export const getGallery = async () => {
  const res = await apiPublic.get("/gallery");
  return res.data;
};

export const getCarousel = async () => {
  const res = await apiPublic.get("/carousel");
  return res.data;
};

export const getEvent = async () => {
  const res = await apiPublic.get("/event");
  return res.data;
};