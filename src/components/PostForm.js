import React from "react";
import { connect } from "react-redux";

import { createPosts } from "../redux/action";

class PostForm extends React.Component {
  state = {
    title: "",
  };
  submitHandler = (event) => {
    event.preventDefault();
    const { title } = this.state;
    if (!title.trim()) {
      return;
    }
    const newPost = {
      title,
      id: Date.now().toString(),
    };
    this.setState({
      title: "",
    });
    this.props.createPosts(newPost);
  };
  changeInputHandler = (event) => {
    event.persist();
    this.setState((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }));
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label htmlFor="title">Heading Post</label>
          <input
            type="text"
            className="form-control"
            placeholder="your posts"
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.changeInputHandler}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    );
  }
}

export default connect(null, { createPosts })(PostForm);
