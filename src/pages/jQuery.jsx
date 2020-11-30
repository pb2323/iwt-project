import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NavBar from "../components/Navbar";
import SidePanel from "../components/SidePanel";

export default class jQueryPage extends Component {
  render() {
    if (!localStorage.getItem("user")) return <Redirect to="/login" />;
    else
      return (
        <>
          <NavBar />
          <SidePanel />
          <div
            style={{
              position: "absolute",
              left: "25%",
              top: "100px",
              width: "75%",
              height: "80%",
            }}
          >
            <div style={{ backgroundColor: "#eeeeee", width: "40%" }}>
              <h1 style={{ backgroundColor: "#4caf50", textAlign: "center" }}>
                What is jQuery
              </h1>
              <ul>
                <li>
                  jQuery is a lightweight, "write less, do more", JavaScript
                  library.
                </li>
                <br />
                <li>
                  jQuery takes a lot of common tasks that require many lines of
                  JavaScript code to accomplish, and wraps them into methods
                  that you can call with a single line of code.
                </li>
                <br />
                <li>
                  jQuery also simplifies a lot of the complicated things from
                  JavaScript, like AJAX calls and DOM manipulation.
                </li>
                <br />
                <li>The jQuery library contains the following features</li>
                <ol>
                  <li>HTML/DOM manipulation</li>
                  <li>CSS manipulation</li>
                  <li>HTML event methods</li>
                  <li>Effects and animations</li>
                  <li>AJAX</li>
                </ol>
              </ul>
            </div>
            <div
              style={{
                backgroundColor: "#eeeeee",
                marginTop: "30px",
                width: "40%",
                height: "370px",
              }}
            >
              <h1 style={{ backgroundColor: "#4caf50", textAlign: "center" }}>
                HTTP
              </h1>
              <p style={{ padding: "10px" }}>
                HTTP is a protocol which allows the fetching of resources, such
                as HTML documents.
              </p>
              <ul>
                <li>
                  HTTP/1.1 was first documented in RFC 2068 in 1997. That
                  specification was obsoleted by RFC 2616 in 1999, which was
                  likewise replaced by the RFC 7230 family of RFCs in 2014.
                </li>
                <br />
                <li>
                  HTTP/2 is a more efficient expression of HTTP's semantics "on
                  the wire", and was published in 2015
                </li>
                <br />
                <li>
                  HTTP/3 is the proposed successor to HTTP/2, which is already
                  in use on the web (enabled by default in latest macOS), using
                  UDP instead of TCP for the underlying transport protocol
                </li>
                <br />
              </ul>
            </div>
            <div
              style={{
                backgroundColor: "#eeeeee",
                width: "40%",
                position: "absolute",
                left: "50%",
                top: "3%",
                height: "370px",
              }}
            >
              <h1
                style={{
                  backgroundColor: "#4caf50",
                  textAlign: "center",
                  margin: "0",
                }}
              >
                jQuery Syntax
              </h1>
              <p style={{ padding: "10px" }}>
                Basic syntax is: <b> $(selector).action()</b>
              </p>
              <p style={{ padding: "10px" }}>
                <b>
                  <u>Javascript</u>
                </b>
                Many of the biggest companies on the Web use jQuery, such as:
                <ul>
                  <li>Google</li>
                  <li>Microsoft</li>
                  <li>Netflix</li>
                </ul>
              </p>
              <p style={{ padding: "10px" }}>
                <b>
                  <u>CSS</u>
                </b>
                : This is the file where all the design elements of a website
                are defined (like the Muscular System) i.e., the fonts to be
                used, the colors, the backgrounds, the image sizes etc.
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#eeeeee",
                marginTop: "30px",
              }}
            >
              <h1 style={{ backgroundColor: "#4caf50", textAlign: "center" }}>
                Front-end vs Backend
              </h1>
              <p style={{ padding: "10px" }}>
                In website design there are generally two types of languages:
              </p>
              <p style={{ padding: "10px" }}>
                <b>
                  <u>Front End</u>
                </b>
                : Languages like HTML, CSS, JS etc. , which help design the
                webpage which the end-user will be viewing.
              </p>
              <p style={{ padding: "10px" }}>
                <b>
                  <u>Back End</u>
                </b>
                : Languages like Java, SQL, Ruby, PHP etc. , which aid in the
                server-side programming which holds the databases that the
                end-user will be accessing through the website.
              </p>
              <p style={{ padding: "10px" }}>
                This division results in three different kinds of
                web-developers:
              </p>
              <ul>
                <li>
                  Front End Developers, who work on the front end designing
                </li>
                <li>
                  Back End Developers, who work on the server-side i.e., back
                  end designing of the databases
                </li>
                <li>Full Stack Developers who work on both these stacks.</li>
              </ul>
            </div>
          </div>
        </>
      );
  }
}
