import axios from 'axios';

export const getPengurus = async () => {
  try {
    const response = await axios.get('http://localhost:3008/pengurus/get');
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching pengurus:', error);
    return [];
  }
};
export const getPrestasi = async () => {
  try {
    const response = await axios.get('http://localhost:3008/prestasi/get');
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching prestasi:', error);
    return [];
  }
};
export const getCarousel = async () => {
  try {
    const response = await axios.get('http://localhost:3008/carousel/get');
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching carousel:', error);
    return [];
  }
};
export const getBlog = async () => {
  try {
    const response = await axios.get('http://localhost:3008/blog/get');
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching blog:', error);
    return [];
  }
};
export const getGallery = async () => {
  try {
    const response = await axios.get('http://localhost:3008/gallery/get');
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching gallery:', error);
    return [];
  }
};
