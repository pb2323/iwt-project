import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    if (localStorage.getItem("user") === "null")
      return <Redirect to="/login" />;
    return (
      <span>
        <button
          onClick={() => localStorage.setItem("user", "")}
          style={{ width: "10%", float: "right" }}
        >
          <Link style={{ textDecoration: "none" }} to="/login">
            Logout
          </Link>
        </button>
        <h1 style={{ display: "inline-block", marginLeft: "35%" }}>Welcome</h1>
        <button type="primary" style={{ width: "10%", float: "left" }}>
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
        </button>
      </span>
    );
  }
}
