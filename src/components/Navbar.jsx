import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    if (localStorage.getItem("user") === "null")
      return <Redirect to="/login" />;
    return (
      <span>
        <Link style={{ textDecoration: "none" }} to="/login">
          <button
            onClick={() => localStorage.setItem("user", "")}
            style={{ width: "10%", float: "right" }}
          >
            Logout
          </button>
        </Link>
        <h1 style={{ display: "inline-block", marginLeft: "27%" }}>
          <u> Internet and Web Technology</u>
        </h1>
        <Link style={{ textDecoration: "none" }} to="/">
          <button type="primary" style={{ width: "10%", float: "left" }}>
            Home
          </button>{" "}
        </Link>
      </span>
    );
  }
}
