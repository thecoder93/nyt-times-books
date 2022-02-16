import axios from "axios";

const NYT_APP_API_KEY = process.env.REACT_APP_NYT_APP_API_KEY  
const BASE_URL = process.env.REACT_APP_BASE_URL_API_NYT  

export const API_URL = `${BASE_URL}/lists/overview.json?apiKey=${NYT_APP_API_KEY}`

export const getOverviewBooks = async () => {
  try {
    return await axios.get(API_URL);
  } catch (e) {
    return [];
  }
};

