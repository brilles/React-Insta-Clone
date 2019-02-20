import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostsContainer from "./components/PostsContainer/PostsContainer";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      postsData: [],
      postsDataFiltered: []
    };
  }

  componentDidMount() {
    this.setState({ postsData: dummyData });
  }

  handleSearch = e => {
    this.setState({
      postsDataFiltered: this.state.postsData.filter(post => {
        if (post.username === e.target.value) {
          return post;
        }
      })
    });
  };

  render() {
    return (
      <div className="App">
        <SearchBar handleSearch={this.handleSearch} />
        <PostsContainer
          postsData={
            this.state.postsDataFiltered[0] == null
              ? this.state.postsData
              : this.state.postsDataFiltered
          }
        />
      </div>
    );
  }
}

export default App;
