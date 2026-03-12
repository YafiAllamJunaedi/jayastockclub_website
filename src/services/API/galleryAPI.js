import axios from 'axios';

export const getGallery = async () => {
  try {
    const response = await axios.get('http://localhost:3008/gallery/get');
    return response.data;
  } catch (error) {
    console.error('Error fetching gallery:', error);
    return [];
  }
};

export const createGallery = async (clientData) => {
  try {
    const response = await axios.post("http://localhost:3008/gallery/post", clientData);
    return response.data;
  } catch (error) {
    console.error("Error creating gallery:", error);
    throw error;
  }
};

export const editGallery = async (id, formData) => {
  try {
    const response = await axios.put(
      `http://localhost:3008/gallery/update/${id}`,
      formData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating gallery:", error);
    throw error;
  }
};
export const deleteGallery = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3008/gallery/delete/${id}`);
      return response.data
  } catch (error){
    console.error("error deleting gallery", error);
    throw(error);
  }
};