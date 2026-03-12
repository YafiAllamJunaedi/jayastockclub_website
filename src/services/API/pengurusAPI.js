import axios from 'axios';

export const getPengurus = async () => {
  try {
    const response = await axios.get('http://localhost:3008/pengurus/get');
    return response.data;
  } catch (error) {
    console.error('Error fetching pengurus:', error);
    return [];
  }
};

export const createPengurus = async (clientData) => {
  try {
    const response = await axios.post("http://localhost:3008/pengurus/post", clientData);
    return response.data;
  } catch (error) {
    console.error("Error creating pengurus:", error);
    throw error;
  }
};

export const editPengurus = async (id, formData) => {
  try {
    const response = await axios.put(
      `http://localhost:3008/pengurus/update/${id}`,
      formData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating pengurus:", error);
    throw error;
  }
};
export const deletePengurus = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3008/pengurus/delete/${id}`);
      return response.data
  } catch (error){
    console.error("error deleting pengurus", error);
    throw(error);
  }
};