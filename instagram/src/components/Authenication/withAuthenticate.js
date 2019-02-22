import React from "react";

export const withAuthenticate = PostPage => LoginPage =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      };
    }

    componentDidMount() {
      if (localStorage.getItem("user")) {
        return this.setState({ loggedIn: true });
      }
      return this.setState({ loggedIn: false });
    }

    render() {
      return this.state.loggedIn ? <PostPage /> : <LoginPage />;
    }
  };

export default withAuthenticate;
