import React from "react";

const Post = ({ post }) => {
  return (
    <div className="">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{post.title}</h4>
        </div>
      </div>
    </div>
  );
};

export default Post;
