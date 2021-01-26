import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPosts } from "../redux/action";
import Post from "./Post";

export default () => {
  const dispatch = useDispatch();
  const onClick = () => dispatch(fetchPosts());
  const posts = useSelector((state) => state.posts.data);

  if (!posts.length) {
    return (
      <button type="submit" className="btn btn-primary" onClick={onClick}>
        Download
      </button>
    );
  }
  return posts.map((post) => <Post post={post} key={post.id} />);
};
