import axios from 'axios';

export const getBlog = async () => {
  try {
    const response = await axios.get('http://localhost:3008/blog/get');
    return response.data;
  } catch (error) {
    console.error('Error fetching blog:', error);
    return [];
  }
};

export const createBlog = async (clientData) => {
  try {
    const response = await axios.post("http://localhost:3008/blog/post", clientData);
    return response.data;
  } catch (error) {
    console.error("Error creating blog:", error);
    throw error;
  }
};

export const editBlog = async (id, formData) => {
  try {
    const response = await axios.put(
      `http://localhost:3008/blog/update/${id}`,
      formData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating blog:", error);
    throw error;
  }
};
export const deleteBlog = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3008/blog/delete/${id}`);
      return response.data
  } catch (error){
    console.error("error deleting blog", error);
    throw(error);
  }
};