import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import "./loginPageCSS.css";

class Login extends Component {
  state = {
    uname: "",
    psw: "",
    error: "",
    shouldProceed: false,
  };
  formSubmit = (event) => {
    event.preventDefault();
    const { uname, psw } = this.state;
    let api = axios.create({
      baseURL: "http://127.0.0.1:1234",
    });
    api.post("/users/login", { uname: uname, psw: psw }).then((res) => {
      console.log(res);
      if (res.data.message === "Login Successfull") {
        localStorage.setItem("user", uname);
        localStorage.setItem("psw", psw);
        this.setState({ error: "", shouldProceed: true });
        return <Redirect to="/" />;
      } else {
        this.setState({ error: res.data.message });
      }
    });
  };
  updateState = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    if (!localStorage.getItem("user")) {
      return (
        <>
          <center>
            <h1 style={{ textDecoration: "underline" }}>Login Form </h1>
          </center>
          <div style={{ margin: "7% 33%" }}>
            <form onSubmit={this.formSubmit}>
              <div className="container">
                <label>
                  <b>Username</b>
                  <input
                    type="text"
                    placeholder="Enter Username"
                    name="uname"
                    onChange={this.updateState}
                    required
                  />{" "}
                </label>

                <label>
                  <b>Password</b>

                  <input
                    type="password"
                    placeholder="Enter Password"
                    name="psw"
                    onChange={this.updateState}
                    required
                  />
                </label>
                <button type="submit">Login</button>
              </div>
              <p>
                Want to Register?<Link to="/register">Click here</Link>{" "}
              </p>
            </form>
            <div>
              <p style={{ color: "red" }}>{this.state.error}</p>
            </div>
          </div>
        </>
      );
    } else return <Redirect to="/" />;
  }
}
export default Login;
