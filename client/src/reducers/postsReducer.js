import { AccordionActions } from "@material-ui/core";
import { CREATE, DELETE, FETCH_ALL, LIKE, UPDATE } from "../constants/actionTypes";

export const postsReducer = (posts = [], { type, payload }) => {
  switch (type) {
    case FETCH_ALL: {
      return payload;
    }
    case CREATE: {
      return [...posts, payload];
    }
    case UPDATE: {
      return posts.map((post) => (post._id === payload._id ? payload : post));
    }
    case DELETE: {
      return posts.filter((post) => post._id !== payload);
    }
    case LIKE: {
      return posts.map((post) => (post._id === payload._id ? payload : post));
    }
    default:
      return posts;
  }
};
