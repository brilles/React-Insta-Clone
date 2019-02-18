import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostsContainer from "./components/PostsContainer/PostsContainer";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      postsData: dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <PostsContainer dummydata={this.state.postsData} />
      </div>
    );
  }
}

export default App;
