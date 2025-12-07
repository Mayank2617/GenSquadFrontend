import axios from 'axios';

// Point to your running Backend Server
const API_URL = 'https://gensquadbackend.onrender.com/api/talent';

export const createTalent = async (formData) => {
  const response = await axios.post(API_URL, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const updateTalent = async (id, data) => {
  const response = await axios.put(`${API_URL}/${id}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const getAllTalent = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// ✅ NEW: Get Single Talent by ID
export const getTalentById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};