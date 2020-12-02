import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import "./loginPageCSS.css";

class Login extends Component {
  state = {
    uname: "",
    email: "",
    psw: "",
    error: "",
    shouldProceed: false,
  };
  formSubmit = (event) => {
    event.preventDefault();
    const { uname, psw, email } = this.state;
    let api = axios.create({
      baseURL: "http://127.0.0.1:1234",
    });
    api
      .post("/users/register", { uname: uname, psw: psw, email: email })
      .then((res) => {
        if (res.data.message === "Registration Successfull") {
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
    if (this.state.shouldProceed) return <Redirect to="/" />;
    else {
      return (
        <>
          <center>
            <h1 style={{ textDecoration: "underline" }}>Register Form </h1>
          </center>
          <div style={{ margin: "7% 33%" }}>
            <form onSubmit={this.formSubmit}>
              <div className="container">
                <label>
                  <b>Email</b>
                  <input
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    onChange={this.updateState}
                    required
                  />{" "}
                </label>

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
                <button type="submit">Register</button>
              </div>
              <p>
                Want to Login?<Link to="/login">Click here</Link>{" "}
              </p>
            </form>
            <div>
              <p style={{ color: "red" }}>{this.state.error}</p>
            </div>
          </div>
        </>
      );
    }
  }
}
export default Login;
