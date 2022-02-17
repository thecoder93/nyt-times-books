import axios from "axios";
import { API_URL_DEV, API_URL_PROD } from "../Constants";

export let API_ENDPOINT: string;

if (process.env.NODE_ENV === "production") {
  API_ENDPOINT = API_URL_PROD
} else {
  API_ENDPOINT = API_URL_DEV
}

export const getOverviewBooks = async () => {
  try {
    return await axios.get(API_ENDPOINT);
  } catch (e) {
    return [];
  }
};