import React from "react";
import instagramlogo from "../../assets/instagramlogo.png";
import styled from "styled-components";

const FormContainer2 = styled.div`
  max-width: 350px;
  margin: 0 auto;
  border: 1px solid #efefef;
  margin-top: 10px;
  padding: 20px;
  text-align: center;
  background-color: #ffffff;
  border-radius: 1px;
  img {
    padding-top: 10px;
    width: 170px;
  }
  form {
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
      width: 75%;
      box-sizing: border-box;
      margin: 5px;
      padding: 5px;
      border: 1px solid #efefef;
      background-color: #fafafa;
      border-radius: 3px;
      color: #262626;
    }
    button {
      margin-top: 8px;
      background-color: #3897f0;
      width: 75%;
      height: 30px;
      border: none;
      border-radius: 4px;
      color: white;
      font-weight: bold;
      margin-bottom: 10px;
      cursor: pointer;
    }
  }
`;

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChanges = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  logIn = e => {
    e.preventDefault();
    localStorage.setItem("user", this.state.username);
    window.location.reload();
  };

  render() {
    return (
      <div className="login-wrapper">
        <FormContainer2>
          <img src={instagramlogo} alt="instagram logo" />

          <form action="">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={this.state.user}
              onChange={this.handleChanges}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChanges}
            />
            <button onClick={this.logIn}>Log in</button>
          </form>
        </FormContainer2>
      </div>
    );
  }
}
