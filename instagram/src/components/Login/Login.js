import React from "react";
import instagramlogo from "../../assets/instagramlogo.png";
import "./Login.css";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChanges = e =>
    this.setState({ username: e.target.value, password: e.target.value });

  logIn = e => {
    e.preventDefault();
    localStorage.setItem("user", this.state.username);
    window.location.reload();
  };

  render() {
    return (
      <div className="login-wrapper">
        <div className="form-container2">
          <img src={instagramlogo} alt="instagram logo" />

          <form action="">
            <input
              type="text"
              placeholder="Phone number, username, or email"
              value={this.state.user}
              onChange={this.handleChanges}
            />
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChanges}
            />
            <button onClick={this.logIn}>Log in</button>
          </form>
        </div>
      </div>
    );
  }
}
