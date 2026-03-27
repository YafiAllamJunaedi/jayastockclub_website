import axios from "axios";

const API = "http://localhost:5000";

export const createAdmin = async (adminData) => {
  try {
    const response = await axios.post(`${API}/admin/regist`, adminData);
    return response.data;
  } catch (error) {
    console.error("Error creating admin:", error);
    throw error;
  }
};

export const loginAdmin = async (loginData) => {
  try {
    const response = await axios.post(
      `${API}/admin/login`,
      loginData,
      {
        withCredentials: true
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error login admin:", error);
    throw error;
  }
};

export const logoutAdmin = async () => {
  try {
    const response = await axios.delete(
      `${API}/admin/logout`,
      {
        withCredentials: true
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error logout admin:", error);
    throw error;
  }
};