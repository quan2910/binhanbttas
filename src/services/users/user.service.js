import axios from "axios";
import { BASE_URL } from "../axios-client";
import { token } from "../axios-client";
const ENDPOINT = "users";

export const handleSendContact = async (body) => {
  try {
    return await axios.post(`${BASE_URL}/${ENDPOINT}`, body);
  } catch (error) {}
};

export const handleGetContact = async () => {
  try {
    return await axios.get(`${BASE_URL}/${ENDPOINT}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {}
};
