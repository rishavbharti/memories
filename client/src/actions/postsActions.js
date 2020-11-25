import * as api from "../api";
import { CREATE, DELETE, FETCH_ALL, LIKE, UPDATE } from "../constants/actionTypes";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    // console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (postData) => async (dispatch) => {
  try {
    console.log(postData);
    const { data } = await api.newPost(postData);
    // console.log(data)
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, updateData) => async (dispatch) => {
  try {
    const { data } = await api.patchPost(id, updateData);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.removePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id, likeCount) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id, likeCount);
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
