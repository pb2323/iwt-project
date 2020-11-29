import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NavBar from "../components/Navbar";

export default class HomePage extends Component {
  render() {
    if (!localStorage.getItem("user")) return <Redirect to="/login" />;
    return <NavBar />;
  }
}
