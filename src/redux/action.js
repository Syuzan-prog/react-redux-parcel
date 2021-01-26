import { CREATE_POSTS, FETCH_POSTS } from "./actionTypes";

export const createPosts = (post) => {
  return {
    type: CREATE_POSTS,
    payload: post,
  };
};

export const putData = (dataFromServer) => {
  return {
    type: FETCH_POSTS,
    payload: dataFromServer,
  };
};

export const fetchPosts = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((respons) => respons.json())
    .then((json) => {
      dispatch(putData(json));
    });
};
