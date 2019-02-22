import React, { Component } from "react";
import PostPage from "./components/PostsContainer/PostsPage";
import withAuthenticate from "./components/Authenication/withAuthenticate";
import LoginPage from "./components/Login/LoginPage";

// currying
const ComponentFromWithAuthenticate = withAuthenticate(PostPage)(LoginPage);

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
