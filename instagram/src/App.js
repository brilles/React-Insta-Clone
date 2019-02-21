import React, { Component } from "react";
import PostPage from "./components/PostsContainer/PostsPage";
import withAuthenticate from "./components/Authenication/withAuthenticate";
import Login from "./components/Login/Login";

// currying
const ComponentFromWithAuthenticate = withAuthenticate(PostPage)(Login);

export default class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}
