import React, { Component } from "react";
import "./App.css";
import PostPage from "./components/PostsContainer/PostPage";

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <PostPage />
      </div>
    );
  }
}
