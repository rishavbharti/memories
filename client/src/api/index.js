import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);

export const newPost = (data) => axios.post(url, data);

export const patchPost = (id, data) => axios.patch(url + `/${id}`, data);

export const removePost = (id) => axios.delete(url + `/${id}`);

export const likePost = (id, data) => axios.patch(url + `/${id}`, data);
