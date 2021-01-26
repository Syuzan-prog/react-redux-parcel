import React from "react";

import FetchPost from "./components/FetchPost";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <PostForm />
        </div>
        <div className="col-6">
          <h2>Sinxron post</h2>
          <Posts />
        </div>
        <div className="col-6">
          <h2>Asinxron post</h2>
          <FetchPost />
        </div>
      </div>
    </div>
  );
};

export default App;
