import axios from 'axios';

// Point to your running Backend Server
const API_URL = "https://gensquadbackend.onrender.com/api/talent" || 'http://localhost:5000/api/talent';;

export const createTalent = async (formData) => {
  const response = await axios.post(API_URL, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
};

export const updateTalent = async (id, data) => {
  const response = await axios.put(`${API_URL}/${id}`, data);
  return response.data;
};

export const getAllTalent = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};