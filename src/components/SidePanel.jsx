import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SidePanel extends Component {
  render() {
    return (
      <div
        style={{ width: "20%", height: "1000px", backgroundColor: "#eeeeee" }}
      >
        <div style={{ height: "40px" }}>
          <p
            style={{
              fontSize: "20px",
              paddingTop: "20px",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              <strong>Introduction</strong>
            </Link>
          </p>
        </div>
        <div style={{ height: "40px" }}>
          <p
            style={{
              fontSize: "20px",
              paddingTop: "20px",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            <Link style={{ textDecoration: "none", color: "black" }} to="/html">
              <strong>HTML</strong>
            </Link>
          </p>
        </div>
        <div style={{ height: "40px" }}>
          <p
            style={{
              fontSize: "20px",
              paddingTop: "20px",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            <Link style={{ textDecoration: "none", color: "black" }} to="/css">
              <strong>CSS</strong>
            </Link>
          </p>
        </div>
        <div style={{ height: "40px" }}>
          <p
            style={{
              fontSize: "20px",
              paddingTop: "20px",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/javascript"
            >
              <strong>Javascript</strong>
            </Link>
          </p>
        </div>
        <div style={{ height: "40px" }}>
          <p
            style={{
              fontSize: "20px",
              paddingTop: "20px",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            {" "}
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/htmlDOM"
            >
              <strong>HTML DOM</strong>
            </Link>
          </p>
        </div>
        <div style={{ height: "40px" }}>
          <p
            style={{
              fontSize: "20px",
              paddingTop: "20px",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/browDOM"
            >
              <strong>Browser DOM</strong>
            </Link>
          </p>
        </div>
        <div style={{ height: "40px" }}>
          <p
            style={{
              fontSize: "20px",
              paddingTop: "20px",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            <Link style={{ textDecoration: "none", color: "black" }} to="/xml">
              <strong>XML</strong>
            </Link>
          </p>
        </div>
        <div style={{ height: "40px" }}>
          <p
            style={{
              fontSize: "20px",
              paddingTop: "20px",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            <Link style={{ textDecoration: "none", color: "black" }} to="/ajax">
              <strong>AJAX</strong>
            </Link>
          </p>
        </div>
        <div style={{ height: "40px" }}>
          <p
            style={{
              fontSize: "20px",
              paddingTop: "20px",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/jQuery"
            >
              <strong>jQuery</strong>
            </Link>
          </p>
        </div>
        <div style={{ height: "40px" }}>
          <p
            style={{
              fontSize: "20px",
              paddingTop: "20px",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            <Link style={{ textDecoration: "none", color: "black" }} to="/json">
              <strong>JSON</strong>
            </Link>
          </p>
        </div>
        <div style={{ height: "40px" }}>
          <p
            style={{
              fontSize: "20px",
              paddingTop: "20px",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/react"
            >
              <strong>ReactJS</strong>{" "}
            </Link>
          </p>
        </div>
        <div style={{ height: "40px" }}>
          <p
            style={{
              fontSize: "20px",
              paddingTop: "20px",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            <Link style={{ textDecoration: "none", color: "black" }} to="/java">
              <strong>JAVA</strong>
            </Link>
          </p>
        </div>
        <div style={{ height: "40px" }}>
          <p
            style={{
              fontSize: "20px",
              paddingTop: "20px",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            <Link style={{ textDecoration: "none", color: "black" }} to="/node">
              <strong>NodeJS</strong>
            </Link>
          </p>
        </div>
        <div style={{ height: "40px" }}>
          <p
            style={{
              fontSize: "20px",
              paddingTop: "20px",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            <Link style={{ textDecoration: "none", color: "black" }} to="/jsp">
              <strong>JSP</strong>
            </Link>
          </p>
        </div>
        <div style={{ height: "40px" }}>
          <p
            style={{
              fontSize: "20px",
              paddingTop: "20px",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/servlet"
            >
              <strong>Servlet</strong>
            </Link>
          </p>
        </div>
      </div>
    );
  }
}
