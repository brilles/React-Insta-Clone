import React from "react";
import dummyData from "../../dummy-data";
import SearchBar from "../SearchBar/SearchBar";
import PostsContainer from "../PostsContainer/PostsContainer";

export default class PostPage extends React.Component {
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
      <div>
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
