import axios from 'axios';

export const getCarousel = async () => {
  try {
    const response = await axios.get('http://localhost:3008/carousel/get');
    return response.data;
  } catch (error) {
    console.error('Error fetching carousel:', error);
    return [];
  }
};

export const createCarousel = async (clientData) => {
  try {
    const response = await axios.post("http://localhost:3008/carousel/post", clientData);
    return response.data;
  } catch (error) {
    console.error("Error creating carousel:", error);
    throw error;
  }
};

export const editCarousel = async (id, formData) => {
  try {
    const response = await axios.put(
      `http://localhost:3008/carousel/update/${id}`,
      formData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating carousel:", error);
    throw error;
  }
};
export const deleteCarousel = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3008/carousel/delete/${id}`);
      return response.data
  } catch (error){
    console.error("error deleting carousel", error);
    throw(error);
  }
};