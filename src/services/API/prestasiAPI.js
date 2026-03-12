import axios from 'axios';

export const getPrestasi = async () => {
  try {
    const response = await axios.get('http://localhost:3008/prestasi/get');
    return response.data;
  } catch (error) {
    console.error('Error fetching prestasi:', error);
    return [];
  }
};

export const createPrestasi = async (clientData) => {
  try {
    const response = await axios.post("http://localhost:3008/prestasi/post", clientData);
    return response.data;
  } catch (error) {
    console.error("Error creating prestasi:", error);
    throw error;
  }
};

export const editPrestasi = async (id, formData) => {
  try {
    const response = await axios.put(
      `http://localhost:3008/prestasi/update/${id}`,
      formData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating prestasi:", error);
    throw error;
  }
};
export const deletePrestasi = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3008/prestasi/delete/${id}`);
      return response.data
  } catch (error){
    console.error("error deleting prestasi", error);
    throw(error);
  }
};