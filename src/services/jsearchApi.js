import axios from 'axios';

// ⚠️ REPLACE WITH YOUR RAPIDAPI KEY
const RAPID_API_KEY = '298ea72f92mshf2e44e4e7cabc9dp1ad588jsnffd7764b0420'; 

export const fetchJobs = async ({ query, page = 1, datePosted = 'all', jobType = '', remote = false }) => {
  
  // Construct a smart query string
  // If remote is true, we prepend "Remote" to the query
  const finalQuery = `${remote ? 'Remote ' : ''}${query} developer`;

  const options = {
    method: 'GET',
    url: 'https://jsearch.p.rapidapi.com/search',
    headers: {
      'X-RapidAPI-Key': RAPID_API_KEY,
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: {
      query: finalQuery,
      page: page.toString(),
      num_pages: '1',
      date_posted: datePosted !== 'all' ? datePosted : undefined,
      employment_types: jobType || undefined,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.data;
  } catch (error) {
    console.error("JSearch API Error:", error);
    return [];
  }
};