import { CREATE_POSTS, FETCH_POSTS } from "./actionTypes";

const initialState = {
  posts: [],
  data: [],
};
export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POSTS:
      return { ...state, posts: state.posts.concat([action.payload]) };
    case FETCH_POSTS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
