import { api2 } from "./api-config";

export const getPosts = async () => {
  try {
    const response = await api2.get("/posts");
    return response.data;
  } catch (error) {
    throw error?.response?.data ?? "Something went wrong!";
  }
};

export const addPosts = async (data) => {
  try {
    const response = await api2.post("/posts", data);
    return response.data;
  } catch (error) {
    throw error?.response?.data ?? "Something went wrong!";
  }
};

export const editPosts = async (id,data) => {
  try {
    const response = await api2.put(`/posts/${id}`,data);
    return response.data;
  } catch (error) {
    throw error?.response?.data ?? "Something went wrong!";
  }
};

export const deletePosts = async (id) => {
  try {
    const response = await api2.delete(`posts/${id}`);
    return response.data;
  } catch (error) {
    throw error?.response?.data ?? "Something went wrong!";
  }
};


export const getPost = async (id) => {
  try {
    const response = await api2.get(`posts/${id}`);
    return response.data;
  } catch (error) {
    throw error?.response?.data ?? "Something went wrong!";
  }
};
