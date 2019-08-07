import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  componentDidMount() {
    axios.get("/login").then(res => {
      console.log(res);
    });
  }

  onChange = e => {
    const state = { ...this.state };
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = e => {
    e.preventDefault();

    const { username, password } = this.state;

    axios.post("/login", { username, password }).then(result => {
      this.props.history.push("/");
    });
  };

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <input
          type="text"
          class="form-control"
          name="username"
          value={username}
          onChange={this.onChange}
          placeholder="Username"
        />
        <input
          type="password"
          class="form-control"
          name="password"
          value={password}
          onChange={this.onChange}
          placeholder="Password"
        />
      </div>
    );
  }
}

export default Login;
