import axios from "axios";
import { BASE_URL } from "../axios-client";

const ENDPOINT = "types";

export const handleGetTypes = async () => {
  try {
    return await axios.get(`${BASE_URL}/${ENDPOINT}`);
  } catch (error) {}
};
