import axios from 'axios';

// Ensure this points to your running Backend Server
const API_URL = 'https://gensquad-backend.onrender.com/api/talent';

export const createTalent = async (formData) => {
  const response = await axios.post(API_URL, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
};

export const updateTalent = async (id, data) => {
  const response = await axios.put(`${API_URL}/${id}`, data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
};

export const getAllTalent = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getTalentById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// ✅ NEW: Fetch Experts for Specific Page
// Currently fetches all and filters client-side (efficient enough for <1000 records).
// In future, you can update this to: axios.get(`${API_URL}?subSection=${subSection}&page=${page}`)
export const getExperts = async (subSection, page) => {
  try {
    const response = await axios.get(API_URL);
    const allTalent = response.data;
    
    // Filter based on the new fields you will add to Backend
    // If fields are missing in DB, this returns empty array [] -> UI shows dummy data
    return allTalent.filter(t => 
      t.subSection?.toLowerCase() === subSection?.toLowerCase() && 
      t.page?.toLowerCase() === page?.toLowerCase()
    );
  } catch (error) {
    console.error("Failed to fetch experts", error);
    return [];
  }
};