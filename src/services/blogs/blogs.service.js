import axios from "axios";
import { BASE_URL } from "../axios-client";
import { token } from "../axios-client";
const ENDPOINT = "blogs";

export const handleCreateBlogs = async (body) => {
  try {
    return await axios.post(`${BASE_URL}/${ENDPOINT}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {}
};

export const handleGetBlogs = async (params) => {
  try {
    return await axios.get(`${BASE_URL}/${ENDPOINT}`, params);
  } catch (error) {}
};

export const handleGetBlog = async (id) => {
  try {
    return await axios.get(`${BASE_URL}/${ENDPOINT}/${id}`);
  } catch (error) {}
};

export const handleRemoveBlogs = async (id) => {
  try {
    return await axios.delete(`${BASE_URL}/${ENDPOINT}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {}
};
