const NYT_APP_API_KEY = process.env.REACT_APP_NYT_APP_API_KEY  
const BASE_URL = process.env.REACT_APP_BASE_URL_API_NYT  

export const API_URL_DEV = `${BASE_URL}/lists/overview.json?api-key=${NYT_APP_API_KEY}`
export const API_URL_PROD = `/.netlify/functions/books`