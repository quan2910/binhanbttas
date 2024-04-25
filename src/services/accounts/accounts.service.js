import axios from "axios";
import { BASE_URL } from "../axios-client";
const ENDPOINT = "accounts";

export const handleAdminLogin = async (body) => {
  try {
    return await axios.post(`${BASE_URL}/${ENDPOINT}/login`, body);
  } catch (error) {}
};
